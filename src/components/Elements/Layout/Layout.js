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

            <main>{children}</main>
            <footer>
                <p>If you would like to send your love, text 6692732451</p>
                <p>© {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
