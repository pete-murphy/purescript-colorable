import React, { useState } from "react"
import "./App.css"
import { getLuminance, getContrast } from "./output/Colorable"

const App = () => {
  let [colorA, setColorA] = useState("#fff")
  let [colorB, setColorB] = useState("#0ff")
  const [a, b] = [colorA, colorB]
  const handleChange = key => ({ target: { value } }) => {
    switch (key) {
      case "a":
        setColorA(value)
      case "b":
        setColorB(value)
      default:
        break
    }
    console.log(getContrast(a)(b))
  }
  const handleClick = () => {
    document.documentElement.style.setProperty("--background-color", a)
  }
  return (
    <main>
      <input value={a} onChange={handleChange("a")} type="text" />
      <input value={b} onChange={handleChange("b")} type="text" />
      <button onClick={handleClick}>Submit</button>
    </main>
  )
}

export default App
