import React, { useState } from "react"
import "./App.css"
import { getContrast } from "./output/Colorable"

const App = () => {
  const [{ a, b }, setColor] = useState({ a: "#fff", b: "#ccc" })
  const handleChange = key => ({ target: { value } }) => {
    setColor(() => ({ [key]: value }))
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
