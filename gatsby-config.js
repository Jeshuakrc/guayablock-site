module.exports = {
    siteMetadata: {
      title: `guayablock-site`,
      siteUrl: `https://guayablock.com`
    },
    plugins: [ 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/MainLayout.js`),
      }
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};