import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { SEO } from './Seo'
import './layout.css'

export const Layout = ({ children }) => {
    const {
        site: {
            siteMetadata: { title }
        }
    } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <SEO title={title} />

            <main style={{ height: '98vh' }}>{children}</main>
            <footer>© {new Date().getFullYear()}, Built with</footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
