module.exports = {
    siteMetadata: {
        title: `Encouragement Now`,
        description: `A site to explain the enouragement now features.`,
        author: `Robert Osborne`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/web-icon.png`
            }
        }
    ]
}
