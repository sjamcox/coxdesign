import React from "react"
import Layout from "../layouts/Layout"
import { Project } from "../elements/Project"

const Projects = () => {
  return (
    <>
      <Layout>
          <h1>Take a look at a few of my projects.</h1>
          <Project
            key="1"
            name="YMCA of Columbia-Willamette"
            text="In addition to my role overseeing and providing development strategy for the website, I create suites of marketing materials for ad campaigns and special events."
            link="https://www.ymcacw.org/"
          />
          <Project
            key="2"
            name="US Mission Network"
            text="I created the branding and website for this force for change within the YMCA."
            link="https://usmissionnetwork.org/"
          />
          <Project
            key="3"
            name="Second Half Now"
            text="I developed the WordPress site for this podcast dedicated to helping America's baby boomers live a life that matters."
            link="https://secondhalfnow.com/"
          />
      </Layout>
    </>
    )
}

export default Projects
