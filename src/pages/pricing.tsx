import React from "react"
import PricingMain from "../components/Home/Pricing"
import Layout from "../components/Layout"
import PricingCTA from "../components/Pricing/PricingCTA"
import PricingFAQ from "../components/Pricing/PricingFAQ"
import PricingHeader from "../components/Pricing/PricingHeader"

const Pricing = () => {
  return (
    <Layout>
      <PricingHeader></PricingHeader>
      <div className="mt-20">
        <PricingMain></PricingMain>
      </div>
      <PricingFAQ></PricingFAQ>
      <PricingCTA></PricingCTA>
    </Layout>
  )
}

export default Pricing
