const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `allPortfolioJson`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` });
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return graphql(`
    {
        allPortfolioJson {
          edges {
            node {
              slug
              title
              subtitle
              color_theme
              text {
                about
                technologies
                list
              }
            }
          }
        }
      }
      
  `).then((result) => {
		result.data.allPortfolioJson.edges.forEach(({ node }) => {
			createPage({
				path: 'portfolio/' + node.slug,
				component: path.resolve(`./src/components/portfolio/PortfolioItem.jsx`),
				context: node
			});
		});
	});
};
