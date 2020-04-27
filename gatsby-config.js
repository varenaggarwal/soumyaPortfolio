module.exports = {
  siteMetadata: {
    title: 'Soumya Aggatwal',
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
