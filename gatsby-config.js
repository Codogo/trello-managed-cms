module.exports = {
	siteMetadata: {
		title: "Trello Managed CSS",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: "j8b2h64cwsnc",
				accessToken: "436c7978b66fd59e69bce0c8e9b14e106713d17939960d08e96ed4525a8ede09",
			},
		},
		{
			resolve: "gatsby-plugin-favicon",
			options: {
				logo: "./src/images/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-118480978-1", // Puts tracking script in the head instead of the body
				head: false, // Setting this parameter is optional
				anonymize: true, // Setting this parameter is also optional
				respectDNT: true, // Avoids sending pageview hits from custom paths
				exclude: [ "/preview/**", "/do-not-track/me/too/", ],
			},
		},
	],
};
