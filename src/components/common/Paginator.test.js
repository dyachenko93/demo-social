import React from "react"
import { create } from "react-test-renderer"
import PaginationNew from "./PaginationNew"

describe("Paginator component test", () => {
  test("pages count is 11 but should be allowed only 10", () => {
    const component = create(<PaginationNew totalItemsCount={11} pageSize={1} portionSize={10} />)
    const root = component.root
    let spans = root.findAllByType("span")
    expect(spans.length).toBe(10)
  })
  
  test("is pages count is more than 10 button next should be present", () => {
    const component = create(<PaginationNew totalItemsCount={11} pageSize={1} portionSize={10} />)
    const root = component.root
    let button = root.findAllByType("button")
    expect(button.length).toBe(1)
  })
})