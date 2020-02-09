import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import ExternalLink from "../components/externalLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section id="about" title="About Me">
      <p>
        I'm a highly motivated front-end developer who has experience building
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
        desc="Senior UI Developer, January 2020 - Present"
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
    {/* <Section id="projects" title="Projects">
      <ExternalLink
        title="Pivalink"
        link="https://pivalink.com"
        desc="Tool to create microlanding pages that can be easily updated and customized to fit any brand"
      />
      <ExternalLink
        title="Coursefacts"
        link="https://coursefacts.com"
        desc="A platform where students can read and write university / college course reviews anonymously"
      />
      <ExternalLink
        title="Dev Blog"
        link="https://github.com/RyanFitzgerald/devblog"
        desc="A open source and minimal personal blog template for developers built with Gatsby and React"
      />
      <ExternalLink
        title="Dev Portfolio"
        link="https://github.com/RyanFitzgerald/devportfolio"
        desc="An open source and customizable single-page personal portfolio template for developers"
      />
      <ExternalLink
        title="Day Counter"
        link="https://chrome.google.com/webstore/detail/day-counter-new-tab-page/popaiegponeiefbiddhmaphpbdjoegff?hl=en"
        desc="Chrome extension to track days until or since life events with over 5k active users"
      />
    </Section> */}
    <Section id="skills" title="Skills">
      <ExternalLink
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), Typescript, React, Node.js, Express.js"
      />
      <ExternalLink title="Databases" desc="Firebase, Firestore, MongoDB" />
      <ExternalLink
        title="Other"
        desc="GCP, Amazon Web Services (AWS), CI / CD, Microservices"
      />
    </Section>
  </Layout>
)

export default IndexPage
