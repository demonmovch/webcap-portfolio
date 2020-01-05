export default class RotationMatrixFromEuler {
	constructor() {
		this.currentScreenOrientation = window.orientation || 0;
		this.coefDegToRad = Math.PI / 180;

		window.addEventListener(
			'orientationchange',
			() => {
				this.currentScreenOrientation = window.orientation;
			},
			false
		);
	}

	degToRad(val) {
		return val ? val * this.coefDegToRad : 0;
	}

	getBaseRotationMatrix(alpha, beta, gamma) {
		const _x = this.degToRad(beta);
		const _y = this.degToRad(gamma);
		const _z = this.degToRad(alpha);

		const cX = Math.cos(_x);
		const cY = Math.cos(_y);
		const cZ = Math.cos(_z);
		const sX = Math.sin(_x);
		const sY = Math.sin(_y);
		const sZ = Math.sin(_z);

		//
		// ZXY-ordered rotation matrix construction.
		//

		const m11 = cZ * cY - sZ * sX * sY;
		const m12 = -cX * sZ;
		const m13 = cY * sZ * sX + cZ * sY;

		const m21 = cY * sZ + cZ * sX * sY;
		const m22 = cZ * cX;
		const m23 = sZ * sY - cZ * cY * sX;

		const m31 = -cX * sY;
		const m32 = sX;
		const m33 = cX * cY;

		return [ m11, m12, m13, m21, m22, m23, m31, m32, m33 ];
	}

	getScreenTransformationMatrix() {
		const orientationAngle = this.degToRad(this.currentScreenOrientation);

		const cA = Math.cos(orientationAngle);
		const sA = Math.sin(orientationAngle);

		// Construct our screen transformation matrix
		const r_s = [ cA, -sA, 0, sA, cA, 0, 0, 0, 1 ];

		return r_s;
	}

	getWorldTransformationMatrix() {
		var x = 90 * this.coefDegToRad;

		var cA = Math.cos(x);
		var sA = Math.sin(x);

		return [ 1, 0, 0, 0, cA, -sA, 0, sA, cA ];
	}

	static matrixMultiply(a, b) {
		let final = [];

		final[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6];
		final[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7];
		final[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8];

		final[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6];
		final[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7];
		final[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8];

		final[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6];
		final[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7];
		final[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8];

		return final;
	}

	computeMatrix(currentDeviceOrientation) {
		if (currentDeviceOrientation == null) {
			return null;
		}

		const rotationMatrix = this.getBaseRotationMatrix(
			currentDeviceOrientation.alpha,
			currentDeviceOrientation.beta,
			currentDeviceOrientation.gamma
		);

		const screenTransform = this.getScreenTransformationMatrix(); // r_s

		const screenAdjustedMatrix = RotationMatrixFromEuler.matrixMultiply(rotationMatrix, screenTransform); // R_s

		const worldTransform = this.getWorldTransformationMatrix(); // r_w

		return RotationMatrixFromEuler.matrixMultiply(screenAdjustedMatrix, worldTransform); // R_w = [ m11, m12, m13, m21, m22, m23, m31, m32, m33 ]
	}
}
