import React, { useState } from "react"
import { DarkModeToggler } from "react-darkmode-toggler"
import { Post } from "../components/Post/Post"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/Theme/Theme"
import "./style.css"
import { GlobalStyle } from "../components/Theme/globalStyle"

/**
 * To center Toggler
 */
const Div = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
`

export default () => {
  const [isDark, setIsDark] = useState("light")

  // Dark mode button toggler
  const darkModeHandler = () => {
    setIsDark(isDark === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle theme={isDark} />
      <Div>
        <DarkModeToggler
          size="small"
          isDark={isDark}
          onClick={darkModeHandler}
          border="#FFFFFF"
        />
      </Div>
      <Post />
    </ThemeProvider>
  )
}
