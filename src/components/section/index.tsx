import React from "react"

import "./section.css"

type SectionProps = React.PropsWithChildren<{
  id: string
  title: string
}>

const Section: React.FC<SectionProps> = ({ children, id, title }) => {
  return (
    <section id={id} className={`section__wrapper`}>
      <div className={`section__left`}>
        <h3 className={`section__title`}>{title}</h3>
      </div>
      <div className={`section__right`}>{children}</div>
    </section>
  )
}

export default Section
