module.exports = {
  siteMetadata: {
    title: '@jumpalottahigh',
    siteUrl: `https://www.georgi-yanev.com`,
    author: `Georgi Yanev`,
    description: `Georgi Yanev's Portfolio`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-43588334-2`,
      },
    },
    {
      // If you’re using this plugin together with gatsby-plugin-offline (recommended),
      // this plugin should be listed before the offline plugin so that it can cache the created manifest.json.
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Georgi Yanev Portfolio',
        short_name: 'GY Portfolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#0275d8',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
