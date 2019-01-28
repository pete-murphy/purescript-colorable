import React, { useState } from "react"
import "./App.css"
import { getLuminance } from "./output/Colorable"

const App = () => {
  const [colors, setColor] = useState({ a: "#fff", b: "#ccc" })
  const { a, b } = colors
  const handleChange = key => ({ target: { value } }) => {
    setColor(() => ({ [key]: value }))
    console.log(getLuminance(a))
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
