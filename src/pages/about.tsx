import React from "react"
import AboutGrid from "../components/About/AboutGrid"
import AboutHeader from "../components/About/AboutHeader"
import AboutMore from "../components/About/AboutMore"
import AboutTeamBigCard from "../components/About/AboutTeamBigCard"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <AboutHeader></AboutHeader>
      <AboutMore></AboutMore>
      <AboutTeamBigCard></AboutTeamBigCard>
      <AboutGrid></AboutGrid>
    </Layout>
  )
}

export default About
