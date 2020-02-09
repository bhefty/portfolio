import React from "react"

import "./link.css"

type ExternalLinkProps = {
  desc: string
  link?: string
  title: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ desc, link, title }) => {
  return (
    <div className={`link__wrapper`}>
      {link ? (
        <a className={`link__link-title`} href={link}>
          {title}
        </a>
      ) : (
        <span className={`link__title`}>{title}</span>
      )}

      <p className={`link__desc`}>{desc}</p>
    </div>
  )
}

export default ExternalLink
