module.exports = {
  siteMetadata: {
    title: 'Soumya Aggarwal',
    author: 'Varen Aggarwal',
    description: 'Art Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Soumya-Aggarwal',
        short_name: 'SoumyaArt',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-google-analytics',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options:{
        trackingID: process.env.googleAnalyticsTrackingID || "none"
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
