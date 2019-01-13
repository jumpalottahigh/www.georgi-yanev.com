import React from 'react'
import Layout from '../components/Layout/layout.js'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        height: '60vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
