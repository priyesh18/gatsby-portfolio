import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ padding: "16px 32px" }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... </p>
      <p>I probably messed up somewhere!</p>
    </div>
  </Layout>
)

export default NotFoundPage
