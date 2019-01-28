import React, { useState } from "react"
import "./App.css"
import { color as c } from "../output/Colorable"

const App = () => {
  const [color, setColor] = useState("#f00")
  const handleClick = () => {
    document.documentElement.style.setProperty("--background-color", color)
  }
  return (
    <main>
      <input
        value={color}
        onChange={({ target: { value } }) => setColor(c)}
        type="text"
      />
      <button onClick={handleClick}>Submit</button>
    </main>
  )
}

export default App
