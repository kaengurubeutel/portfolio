// apollo.config.js


module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: 'https://eu-west-2.cdn.hygraph.com/content/cmltyy9ly00ng07w27kip7jie/master/',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}
