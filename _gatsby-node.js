var slugify = require('slugify')
var path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /velocity/,
      loader: 'null-loader'
    })
  }
}

 // You can delete this file if you're not using it

 // Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage, } = boundActionCreators;

	return new Promise((resolve, reject) => {
		// nope
	});
};