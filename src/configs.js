import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  heading: {
    label: "Heading text",
    type: ElementPropTypes.string,
  },
  headingFontSizeString: {
    label: "Heading font size (with CSS units)",
    type: ElementPropTypes.string,
  },
  text: {
    label: "Text content",
    type: ElementPropTypes.string,
  },
  textFontSizeNumber: {
    label: "Heading font size (numeric)",
    type: ElementPropTypes.number,
  },
  cssLengthUnit: {
    label: "CSS length unit for text font size",
    type: ElementPropTypes.string,
  },
}

export const defaultConfig = {
  heading: "Custom heading",
  headingFontSizeString: "2em",
  text: "Custom text",
  textFontSizeNumber: 24,
  cssLengthUnit: "px",
}
