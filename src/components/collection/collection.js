import React from "react"
import "../../components/collection/collection.css"
import CollectionImage from "../../images/collection1.png"
function Collection() {
  return (
    <div className="site-collection-section">
      <div className="wrapper">
        <header>
          <h2 className="site-title-big text-center">New Collection</h2>
        </header>
        <div className="column-row">
          <div className="column column-6">
            <img src={CollectionImage}></img>
          </div>
          <div className="column column-6">
            <img src={CollectionImage}></img>
          </div>
          <div className="column column-6">
            <img src={CollectionImage}></img>
          </div>
          <div className="column column-6">
            <img src={CollectionImage}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
