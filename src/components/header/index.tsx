import React, { useState } from "react"

import "./header.css"
import Socials from "../socials"
import AvatarDefault from "../../assets/avatar-default.svg"
import AvatarDefaultGlasses from "../../assets/avatar-default-glasses.svg"
import AvatarSmile from "../../assets/avatar-smile.svg"
import AvatarSmileGlasses from "../../assets/avatar-smile-glasses.svg"

const Header: React.FC = () => {
  const [isSmiling, setIsSmiling] = useState(false)
  const [isWearingSunglasses, setIsWearingSunglasses] = useState(false)

  const toggleSunglasses = () => setIsWearingSunglasses(!isWearingSunglasses)

  const handleMouseOver = () => setIsSmiling(true)

  const handleMouseLeave = () => setIsSmiling(false)

  return (
    <header>
      <div
        className={"header__picture-container"}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={toggleSunglasses}
      >
        {isSmiling ? (
          isWearingSunglasses ? (
            <AvatarSmileGlasses />
          ) : (
            <AvatarSmile />
          )
        ) : isWearingSunglasses ? (
          <AvatarDefaultGlasses />
        ) : (
          <AvatarDefault />
        )}
      </div>
      <div className={"header__profile-content"}>
        <h1>Bill Hefty</h1>
        <h2>Front-End developer based in Austin, TX.</h2>
        <Socials />
      </div>
    </header>
  )
}

export default Header
