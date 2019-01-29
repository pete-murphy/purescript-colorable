import React, { useState } from "react"
import "./App.scss"
import Section from "./components/Section"
import { parseColor } from "./output/Colorable"

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
        bg={parseColor(a)}
        textColor={parseColor(text)}
        bgString={a}
        textColorString={text}
        handleChange={handleChange("a")}
        handleTextChange={handleChange("text")}
      />
      <Section
        bg={parseColor(b)}
        textColor={parseColor(text)}
        bgString={b}
        textColorString={text}
        handleChange={handleChange("b")}
        handleTextChange={handleChange("text")}
      />
    </>
  )
}

export default App
