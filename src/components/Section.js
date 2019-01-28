import React from "react"
import { getContrast } from "../output/Colorable"

const style = ({ bg, textColor }) => ({
  backgroundColor: bg,
  color: textColor
})

const inputStyle = textColor => ({
  color: textColor,
  borderColor: textColor
})

const h1Gen = contrast =>
  contrast.includes("Invalid")
    ? contrast
    : contrast >= 4.5
      ? `Contrast rating: ${contrast >= 7 ? "AAA" : "AA"}`
      : "Not very good"

export default ({ bg, textColor, handleChange, handleTextChange }) => (
  <section style={style({ bg, textColor })}>
    <input
      style={inputStyle(textColor)}
      type="text"
      value={bg}
      onChange={handleChange}
    />
    <input
      style={inputStyle(textColor)}
      type="text"
      value={textColor}
      onChange={handleTextChange}
    />
    <button style={inputStyle(textColor)}>Find optimal</button>
    <div className="content">
      <h2 className="big">{getContrast(bg)(textColor)}</h2>
      <div>
        <h2>{h1Gen(getContrast(bg)(textColor))}</h2>
        <p>
          <em>
            (Note that right now, the <strong>Find optimal</strong> button does
            not work, and the input has to be a valid <code>hexString</code>{" "}
            value.)
          </em>
        </p>
        <p>
          Contrast is the difference in luminance or color that makes an object
          (or its representation in an image or display) distinguishable. In
          visual perception of the real world, contrast is determined by the
          difference in the color and brightness of the object and other objects
          within the same field of view.
        </p>
      </div>
    </div>
  </section>
)
