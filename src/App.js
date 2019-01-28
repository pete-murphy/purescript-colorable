import React, { useState } from "react"
import "./App.scss"
import Section from "./components/Section"

const App = () => {
  const [colors, setColors] = useState({
    a: "#fff",
    b: "#fc0",
    text: "#123090"
  })
  const { a, b, text } = colors
  const handleChange = key => ({ target: { value } }) => {
    setColors(colors => ({ ...colors, [key]: value }))
  }

  return (
    <>
      <Section
        bg={a}
        textColor={text}
        handleChange={handleChange("a")}
        handleTextChange={handleChange("text")}
      />
      <Section
        bg={b}
        textColor={text}
        handleChange={handleChange("b")}
        handleTextChange={handleChange("text")}
      />
    </>
  )
}

export default App
