import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import ExternalLink from "../components/externalLink"
import cdaImg from "../images/aws-certified-developer-associate.png"
import ccpImg from "../images/aws-certified-cloud-practitioner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section id="about" title="About Me">
      <p>
        I'm a highly motivated full stack developer who has experience building
        effective and scalable web applications across various domains.
      </p>
      <p>
        I'm also very adept at learning new technologies and rapidly
        incorporating them in my projects. I firmly believe you should never
        stop learning and always strive to improve on what you currently know!
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <ExternalLink
        title="Whole Foods Market"
        link="https://www.wholefoodsmarket.com/"
        desc="Senior Software Development Engineer, January 2020 - Present"
      />
      <ExternalLink
        title="RentMindMe"
        link="https://www.rentmindme.com"
        desc="Lead Developer, March 2018 - January 2020"
      />
      <ExternalLink
        title="Freelance"
        link="https://www.billhefty.com"
        desc="Developer, January 2016 - January 2020"
      />
    </Section>
    <Section id="skills" title="Skills">
      <ExternalLink
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), Typescript, React, Node.js, Express.js, C#"
      />
      <ExternalLink title="Databases" desc="Firebase, Firestore, MongoDB" />
      <ExternalLink
        title="Other"
        desc="Amazon Web Services (AWS), CI / CD, Microservices"
      />
    </Section>
    <Section id="certifications" title="Certifications">
      <img src={cdaImg} alt={"AWS Certified Developer Associate Badge"} />
      <img src={ccpImg} alt={"AWS Certified Cloud Practioner Badge"} />
    </Section>
  </Layout>
)

export default IndexPage
