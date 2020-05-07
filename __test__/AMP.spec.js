import React from "react"
import { mount } from "enzyme"
import {
  mockUtils as utils,
  joinClasses,
} from "@volusion/element-block-utils/test-utils"
import { block as Block, defaultConfig } from "../src"

import { flushToStyleTag } from "aphrodite"

let props
describe("The Block", () => {
  beforeEach(() => {
    // Reset the block's props to empty
    props = {
      data: {},
      utils: { ...utils, isAmpRequest: true },
      joinClasses,
      queryParams: {},
    }
  })
  it("renders without errors", () => {
    mount(<Block {...props} />)
  })
  describe("when there is no custom data", () => {
    it("should render the block with the default content", () => {
      const wrapper = mount(<Block {...props} />)
      expect(wrapper.text()).toBe(defaultConfig.heading + defaultConfig.text)
    })
    it("should render the block with the default font sizes", () => {
      const wrapper = mount(<Block {...props} />)
      // Force Aphrodite to output the CSS-in-JS styles in time to test them:
      flushToStyleTag()
      const h1Element = wrapper.find("h1").at(0)
      const pElement = wrapper.find("p").at(0)
      // Make sure our CSS-in-JS decorator successfully injected the CSS class
      expect(h1Element.hasClass(/heading_(\w+)/)).toBe(true)
      expect(pElement.hasClass(/text_(\w+)/)).toBe(true)
      // Expect the computed CSS style to match the default heading font sizes
      expect(
        getComputedStyle(h1Element.getDOMNode()).getPropertyValue("font-size")
      ).toBe(defaultConfig.headingFontSizeString)
      expect(
        getComputedStyle(pElement.getDOMNode()).getPropertyValue("font-size")
      ).toBe(defaultConfig.textFontSizeNumber + defaultConfig.cssLengthUnit)
    })
  })
  describe("when given custom data", () => {
    it("should render the block using the custom data", () => {
      const customHeading = "Custom Block Heading"
      const customText = "Custom Block Text"
      const wrapper = mount(
        <Block {...props} heading={customHeading} text={customText} />
      )
      expect(wrapper.text()).toBe(customHeading + customText)
    })
    it("should render the block with the custom font sizes", () => {
      const customHeadingFontSizeString = "4em"
      const customTextFontSizeNumber = 30
      const customCssLengthUnit = "px"

      const wrapper = mount(
        <Block
          {...props}
          headingFontSizeString={customHeadingFontSizeString}
          textFontSizeNumber={customTextFontSizeNumber}
          cssLengthUnit={customCssLengthUnit}
        />
      )
      // Force Aphrodite to output the CSS-in-JS styles in time to test them:
      flushToStyleTag()
      const h1Element = wrapper.find("h1").at(0)
      const pElement = wrapper.find("p").at(0)
      // Make sure our CSS-in-JS decorator successfully injected the CSS class
      expect(h1Element.hasClass(/heading_(\w+)/)).toBe(true)
      expect(pElement.hasClass(/text_(\w+)/)).toBe(true)
      // Expect the computed CSS style to match the default heading font sizes
      expect(
        getComputedStyle(h1Element.getDOMNode()).getPropertyValue("font-size")
      ).toBe(customHeadingFontSizeString)
      expect(
        getComputedStyle(pElement.getDOMNode()).getPropertyValue("font-size")
      ).toBe(customTextFontSizeNumber + customCssLengthUnit)
    })
  })
})
