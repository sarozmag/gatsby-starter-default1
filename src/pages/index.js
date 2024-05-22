import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Test from "./test-test-test"
import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import Collection from "../components/collection/collection"


const IndexPage = () => <Collection />

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
