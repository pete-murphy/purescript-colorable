import React from "react"
import { getContrast, parseColor } from "../output/Colorable"

const style = ({ bg, textColor }) => ({
  backgroundColor: parseColor(bg),
  color: parseColor(textColor)
})

const inputStyle = textColor => ({
  color: parseColor(textColor),
  borderColor: parseColor(textColor)
})

const h1Gen = contrast =>
  isNaN(+contrast)
    ? contrast
    : contrast >= 4.5
      ? `Contrast rating: ${contrast >= 7 ? "AAA" : "AA"}`
      : "Not very good"

const bigGen = contrast => (isNaN(+contrast) ? "N/A" : contrast)

export default ({ bg, text: textColor, handleChange, handleTextChange }) => (
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
      <h2 className="big">{bigGen(getContrast(bg)(textColor))}</h2>
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
