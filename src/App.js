import React, { useState } from "react"
import "./App.css"
import { getContrast } from "./output/Colorable"

const App = () => {
  const [{ a, b }, setColor] = useState({ a: "#fff", b: "#ccc" })
  const handleClick = () => {
    document.documentElement.style.setProperty("--background-color", a)
  }
  console.log("what", getContrast("#000")("#fff"))
  return (
    <main>
      <header>{getContrast(a)(b)}</header>
      <input
        value={a}
        onChange={({ target: { value } }) => setColor({ a: value })}
        type="text"
      />
      <input
        value={b}
        onChange={({ target: { value } }) => setColor(() => ({ b: value }))}
        type="text"
      />
      <button onClick={handleClick}>Submit</button>
    </main>
  )
}

export default App
