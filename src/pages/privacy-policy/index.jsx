import React, { Component } from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import TCP from '../../components/TCP';

export default class index extends Component {
	render() {
		return (
			<Layout footer="true">
				<SEO title="Privacy Policy" keywords={[ 'gatsby', 'application', 'react' ]} />
				<TCP className="hasFooter" bg="#284256">
					<h1>Privacy Policy</h1>
					<div>
						<h3>Terms</h3>
						<p>
							By accessing the website at http://webcap.com, you are agreeing to be bound by these terms
							of service, all applicable laws and regulations, and agree that you are responsible for
							compliance with any applicable local laws. If you do not agree with any of these terms, you
							are prohibited from using or accessing this site. The materials contained in this website
							are protected by applicable copyright and trademark law.
						</p>
					</div>
					<div>
						<h3>Disclaimer</h3>
						<p>
							The materials on WebCap Studio's website are provided on an 'as is' basis. WebCap Studio
							makes no warranties, expressed or implied, and hereby disclaims and negates all other
							warranties including, without limitation, implied warranties or conditions of
							merchantability, fitness for a particular purpose, or non-infringement of intellectual
							property or other violation of rights. <br />
							Further, WebCap Studio does not warrant or make any representations concerning the accuracy,
							likely results, or reliability of the use of the materials on its website or otherwise
							relating to such materials or on any sites linked to this site.
						</p>
					</div>
					<div>
						<h3>Use License</h3>
						<p>
							Permission is granted to temporarily download one copy of the materials (information or
							software) on WebCap Studio's website for personal, non-commercial transitory viewing only.
							This is the grant of a license, not a transfer of title, and under this license you may not:
						</p>
						<ul className="list">
							<li>modify or copy the materials;</li>
							<li>
								use the materials for any commercial purpose, or for any public display (commercial or
								non-commercial);
							</li>
							<li>
								attempt to decompile or reverse engineer any software contained on WebCap Studio's
								website;
							</li>
							<li>remove any copyright or other proprietary notations from the materials;</li>
							<li>
								transfer the materials to another person or "mirror" the materials on any other server
							</li>
						</ul>
						<p>
							This license shall automatically terminate if you violate any of these restrictions and may
							be terminated by WebCap Studio at any time. Upon terminating your viewing of these materials
							or upon the termination of this license, you must destroy any downloaded materials in your
							possession whether in electronic or printed format.
						</p>
					</div>
					<div>
						<h3>Limitations</h3>
						<p>
							In no event shall WebCap Studio or its suppliers be liable for any damages (including,
							without limitation, damages for loss of data or profit, or due to business interruption)
							arising out of the use or inability to use the materials on WebCap Studio's website, even if
							WebCap Studio or a WebCap Studio authorized representative has been notified orally or in
							writing of the possibility of such damage. Because some jurisdictions do not allow
							limitations on implied warranties, or limitations of liability for consequential or
							incidental damages, these limitations may not apply to you.
						</p>
					</div>
					<div>
						<h3>Accuracy of materials</h3>
						<p>
							The materials appearing on WebCap Studio website could include technical, typographical, or
							photographic errors. WebCap Studio does not warrant that any of the materials on its website
							are accurate, complete or current. WebCap Studio may make changes to the materials contained
							on its website at any time without notice. However WebCap Studio does not make any
							commitment to update the materials.
						</p>
					</div>
					<div>
						<h3>Links</h3>
						<p>
							WebCap Studio has not reviewed all of the sites linked to its website and is not responsible
							for the contents of any such linked site. The inclusion of any link does not imply
							endorsement by WebCap Studio of the site. Use of any such linked website is at the user's
							own risk.
						</p>
					</div>
					<div>
						<h3>Modifications</h3>
						<p>
							WebCap Studio may revise these terms of service for its website at any time without notice.
							By using this website you are agreeing to be bound by the then current version of these
							terms of service.
						</p>
					</div>
					<div>
						<h3>Governing Law</h3>
						<p>
							These terms and conditions are governed by and construed in accordance with the laws of
							Ukraine and you irrevocably submit to the exclusive jurisdiction of the courts in that State
							or location.
						</p>
					</div>
					<div className="w100">
						<h3>Privacy Policy</h3>
						<p>
							Your privacy is important to us. It is WebCap Studio's policy to respect your privacy
							regarding any information we may collect from you across our website, http://webcap.com.
						</p>
						<p>
							We don’t ask for your personal information unless we truly need it. When we do, we’ll only
							collect what we need by fair and lawful means and, where appropriate, with your knowledge or
							consent. We’ll also let you know why we’re collecting it and how it will be used.
						</p>
						<p>
							We don’t share your personal information with third-parties, except where required by law.
							We will only retain personal information for as long as necessary to provide you with a
							service.
						</p>
						<p>
							We don’t store your personal information on our servers unless it’s required for providing a
							service to you. What we store, we’ll protect within commercially acceptable means to protect
							your personal information from loss or theft, as well as unauthorized access, disclosure,
							copying, use or modification.
						</p>
					</div>
				</TCP>
			</Layout>
		);
	}
}
