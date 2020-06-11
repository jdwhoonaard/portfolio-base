import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>About me</h1>
    <p>Welcome to the about me page</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
