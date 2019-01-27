import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [color, setColor] = useState("#f00")
  const handleClick = () => {
    document.documentElement.style.setProperty("--background-color", color)
  }
  return (
    <main>
      <input
        value={color}
        onChange={({ target: { value } }) => setColor(value)}
        type="text"
      />
      <button onClick={handleClick}>Submit</button>
    </main>
  )
}

export default App
