import { property, integer, check, forall } from "jsverify"

const add = (x, y) => x + y

describe("add", () => {
  it("commutatitivity (forall |> check)", () => {
    check(forall(integer, integer, (a, b) => add(a, b) === add(b, a)))
  })
  property(
    "commutativity (property)",
    integer,
    integer,
    (a, b) => add(a, b) === add(b, a)
  )
})
