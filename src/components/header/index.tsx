import React, { useState } from "react"
import Avatar from "avataaars"

import "./header.css"
import Socials from "../socials"

const Header: React.FC = () => {
  const [mouthType, setMouthType] = useState("Twinkle")
  const [accessoriesType, setAccessoriesType] = useState("Blank")

  const toggleAccessories = () => {
    if (accessoriesType === "Blank") {
      setAccessoriesType("Sunglasses")
    } else {
      setAccessoriesType("Blank")
    }
  }

  const handleMouseOver = () => setMouthType("Smile")

  const handleMouseLeave = () => setMouthType("Twinkle")

  return (
    <header>
      <div
        className={"header__picture-container"}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={toggleAccessories}
      >
        <Avatar
          avatarStyle="Circle"
          topType="ShortHairShortFlat"
          accessoriesType={accessoriesType}
          hairColor="Red"
          facialHairType="BeardLight"
          facialHairColor="Red"
          clotheType="ShirtCrewNeck"
          clotheColor="Gray02"
          eyeType="Default"
          eyebrowType="Default"
          mouthType={mouthType}
          skinColor="Light"
        />
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
