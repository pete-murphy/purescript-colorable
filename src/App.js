import React, { useState } from "react"
import "./App.css"
import { getLuminance, getContrast } from "./output/Colorable"

const App = () => {
  let [{ a, b }, setColor] = useState({ a: "#fff", b: "#ff0" })
  const handleChange = key => ({ target: { value } }) => {
    setColor(colors => ({ ...colors, [key]: value }))
  }
  const handleClick = () => {
    document.documentElement.style.setProperty("--background-color", a)
  }

  return (
    <>
      <header>{getContrast(a)(b)}</header>
      <main>
        <input value={a} onChange={handleChange("a")} type="text" />
        <input value={b} onChange={handleChange("b")} type="text" />
        <button onClick={handleClick}>Submit</button>
      </main>
    </>
  )
}

export default App
