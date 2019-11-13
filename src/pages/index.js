import React from "react"
import Layout from "../elements/layout"
import { Button } from "../elements/Button"

const IndexPage = () => {
  return (
    <>
      <Layout>
      <h1>Hello, my name is Sam. I design digital and analog experiences.</h1>
        <p>I get immense joy from creating things that please the senses. From a clean user interface to the perfect cup of coffee, life's too short to settle for middle-of-the-road. Web development and graphic design are my trusty tools which I use to solve problems and bring happiness to both my clients and their clientelle.</p>
        <p>I currently work at the <a href="https://www.ymcacw.org/">YMCA of Columbia-Willamette</a>, connecting kids, adults and families to programs that build a healthy spirit, mind and body.</p>
        <h3>Interested in working with me for a future project?</h3>
        <Button link="/contact">Let's Get Connected</Button>
      </Layout>
    </>
    )
}

export default IndexPage
