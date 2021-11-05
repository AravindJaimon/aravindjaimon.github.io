import * as React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Home/Header"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Aravind Jaimon | AJ</title>
    </Helmet>
    <Header></Header>
  </Layout>
)

export default IndexPage
