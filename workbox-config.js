module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,svg,png,jpg,gif,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};