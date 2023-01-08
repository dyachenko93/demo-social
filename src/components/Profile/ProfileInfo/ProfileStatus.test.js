import React from "react"
import { act, create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
  // test("status from props should be in the state", () => {
  //   const component = create(<ProfileStatus status="status for test" />)
  //   const root = component.root
  //   expect(root.state.status).toBe("status for test")
  // })
  
  test("span with status should be displayed", () => {
    const component = create(<ProfileStatus status="status for test" />)
    const root = component.root
    let span = root.findByType('span')
    expect(span).toBeTruthy()
  })
  
  test("input with status shouldnt be displayed", () => {
    const component = create(<ProfileStatus status="status for test" />)
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })
  
  test("span with corret status should be displayed", () => {
    const component = create(<ProfileStatus status="status for test" />)
    const root = component.root
    let span = root.findByType('span').findByType('b').children
    expect(span).toEqual(['status for test'])
  })
  
  test("input with status should be displayed", () => {
    const component = create(<ProfileStatus status="status for test" />)
    const root = component.root
    let span = root.findByType('span')
    act(() => span.props.onDoubleClick())
    let input = root.findByType('input')
    expect(input.props.value).toEqual('status for test')
  })
  
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="status for test" updateStatus={mockCallback} />)
    const root = component.root
    let span = root.findByType('span')
    act(() => span.props.onDoubleClick())
    let input = root.findByType('input')
    act(() => input.props.onBlur())
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})