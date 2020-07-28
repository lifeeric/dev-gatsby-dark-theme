import React, { useState } from "react"
import { DarkModeToggler } from "react-darkmode-toggler"
import { lightTheme, darkTheme } from "../components/Theme/Theme"
import { GlobalStyle } from "../components/Theme/globalStyle"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"

export default ({ data }) => {
  const [isDark, setIsDark] = useState("light")

  // Dark mode button toggler
  const darkModeHandler = () => {
    setIsDark(isDark === "light" ? "dark" : "light")
  }

  return (
    <>
      <GlobalStyle theme={isDark} />
      <div className="toggler">
        <DarkModeToggler
          size="small"
          isDark={isDark}
          onClick={darkModeHandler}
          border="#FFFFFF"
        />
      </div>
      <div className={`profile__container ${isDark === "dark" && `dark`}`}>
        <div className="profile__card">
          <div className="profile__img">
            <Img fixed={data.file.childImageSharp.fixed} alt="Image of mine" />
          </div>
          <div className="profile__body">
            <h1 className="profile__body--title">
              Has One
              <span className="profile__body--secondary">Code addicted</span>
            </h1>
            <div className="profile__actions">
              <button className="profile__actions--btn">Chat</button>
              <button className="profile__actions--btn">follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 230) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
