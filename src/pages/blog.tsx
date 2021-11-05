import React from "react"
import BlogHeader from "../components/Blog/BlogHeader"
import BlogsContainer from "../components/Blog/BlogsContainer"
import Layout from "../components/Layout"

const Blog = () => {
  return (
    <Layout>
      <BlogHeader></BlogHeader>
      <BlogsContainer></BlogsContainer>
    </Layout>
  )
}

export default Blog
