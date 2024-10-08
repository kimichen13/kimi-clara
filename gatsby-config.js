/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Kimi&Clara`,
        siteUrl: `https://www.qqviaja.com`
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-json",
        'gatsby-plugin-postcss',
        "gatsby-plugin-mdx",
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }, {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `./data`,
            },
            __key: "data"
        }]
};
