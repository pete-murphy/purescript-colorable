import { property, integer } from "jsverify"
import colorable from "colorable"
import { getContrast, rgbToString } from "./../output/Colorable"

const toHexString = num => num.toString(16).padStart(2, "0")
const toColor = nums => `#${nums.map(toHexString).join("")}`
const _getContrast = (a, b) =>
  colorable({ a, b }, { compact: true, threshold: 0 })[0].combinations[0]
    .contrast

describe("Getting similar results", () => {
  property(
    "commutativity (property)",
    integer(0, 255),
    integer(0, 255),
    integer(0, 255),
    (a, b, c) => {
      const color = toColor([a, b, c])
      return (
        Math.abs(getContrast("#000")(color) - _getContrast("#000", color)) <
        0.01
      )
    }
  )
})
