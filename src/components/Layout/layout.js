import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'I\'m Georgi and I build things on the web with JavaScript, React and Vue. I believe that however we build apps on the web, they always end up in the hands of humans and it\'s crucial that we address web performance and page load times.' },
            { name: 'keywords', content: 'Georgi Yanev, portfolio, smart home automation, open source software, javascript, web dev, es6, life-long learning, learning, teaching, web development, react, vue, html, css, js' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
