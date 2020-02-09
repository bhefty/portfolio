import React from "react"

import Header from "../header"
import "normalize.css"
import "./global.css"
import "./layout.css"

type LayoutProps = React.PropsWithChildren<{}>

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="app-container">
        <Header />
        <main>{children}</main>
      </div>
      <div className={"layout__blob-main"}>
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path
              d="M93.2,-137.3C126.5,-123.6,163.3,-107.5,191.4,-78C219.5,-48.5,238.9,-5.7,231.2,31.7C223.4,69.1,188.4,101,153.2,121.7C118.1,142.4,82.7,151.8,46.2,166.9C9.7,182,-28,202.8,-63.7,200C-99.4,197.3,-133.2,171,-165.7,140C-198.1,109,-229.2,73.2,-225.2,38.2C-221.2,3.2,-182,-31,-163.2,-75.5C-144.4,-120,-146,-174.8,-122.2,-193C-98.4,-211.1,-49.2,-192.6,-9.6,-177.6C29.9,-162.5,59.8,-151.1,93.2,-137.3Z"
              fill="#7bdcb5"
            />
          </g>
        </svg>
      </div>
      <div className={"layout__blob-secondary"}>
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path
              d="M133.5,-199.9C167.2,-186.1,184.5,-139.2,190.9,-95.8C197.3,-52.5,192.7,-12.7,185.5,25.6C178.3,63.9,168.5,100.7,147.5,131.5C126.6,162.4,94.4,187.2,56.5,203.5C18.5,219.7,-25.3,227.4,-60.2,213.3C-95.1,199.3,-121.3,163.5,-156.6,131C-192,98.6,-236.5,69.5,-240.5,35.2C-244.4,0.9,-207.7,-38.6,-180.9,-76.5C-154,-114.3,-137,-150.5,-108.5,-166.7C-80,-182.8,-40,-178.9,5,-186.6C49.9,-194.3,99.8,-213.7,133.5,-199.9Z"
              fill="#7bdcb5"
            />
          </g>
        </svg>
      </div>
    </>
  )
}

export default Layout
