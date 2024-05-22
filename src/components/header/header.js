import * as React from "react"
import { Link } from "gatsby"
import  "../../components/header/moduleHeader.css"
import Image from "../../images/gatsby-icon.png"
import { GoSearch } from "react-icons/go"
import { GoHeart } from "react-icons/go"
import { VscAccount } from "react-icons/vsc"
import { BsCartPlus } from "react-icons/bs"


const Header = ({ siteTitle }) => (
  <div>
    <header className="site-header">
      <div className="wrapper">
        <div className="header-left-content">
          <ul>
            <li>shop </li>
            <li>journal </li>
            <li>about </li>
          </ul>
        </div>
        <div className="header-middle-content">
          <img src={Image}></img>
        </div>
        <div className="header-right-content">
          <ul>
            <li>
              <GoSearch />
            </li>
            <li>
              <GoHeart />
            </li>
            <li>
              <VscAccount />
            </li>
            <li>
              <BsCartPlus />
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
)

export default Header
