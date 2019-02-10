import { property, integer } from "jsverify"
import colorable from "colorable"
import { getContrast } from "./../output/Colorable"

const toHexString = num => `#${num.toString(16).padStart(6, "0")}`
const _getContrast = (a, b) =>
  colorable({ a, b }, { compact: true, threshold: 0 })[0].combinations[0]
    .contrast

const COLOR_RANGE = [0, 256 ** 3 - 1]

describe("contrast implementation", () => {
  property(
    "returns similar output to existing library (within 0.01 tolerance)",
    integer(...COLOR_RANGE),
    integer(...COLOR_RANGE),
    (a, b) => {
      const colorA = toHexString(a)
      const colorB = toHexString(b)
      return (
        Math.abs(getContrast(colorA)(colorB) - _getContrast(colorA, colorB)) <
        0.01
      )
    }
  )
})
