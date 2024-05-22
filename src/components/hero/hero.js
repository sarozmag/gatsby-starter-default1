import React from "react"
import BannerImage from "../../images/banner1.png"
import "../../components/hero/hero.css"

function Hero() {
  return (
    <div className="site-hero-section">
      <div className="wrapper-fluid">
        <img src={BannerImage}></img>
        <div className="hero-section-details text-center">
          <h2 className="site-title-big">Essentials for a cold winter</h2>
          <p>Discover Autumn Winter 2024</p>
          <button className="section-button">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
