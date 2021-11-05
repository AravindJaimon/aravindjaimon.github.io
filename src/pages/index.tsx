import * as React from "react"
import FeaturedBlog from "../components/FeaturedBlog"
import FeatureSection from "../components/Home/FeatureSection"
// Components
import Header from "../components/Home/Header"
import Pricing from "../components/Home/Pricing"
import Testimonial from "../components/Home/Testimonial"
import Layout from "../components/Layout"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <FeaturedBlog></FeaturedBlog>
    </Layout>
  </div>
)

export default IndexPage
