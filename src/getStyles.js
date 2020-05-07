export const getStyles = ({ headingFontSizeString, textFontSizeNumber }) => {
  const cssLengthUnit = "px"
  return {
    heading: {
      fontSize: headingFontSizeString,
    },
    text: {
      fontSize: textFontSizeNumber + cssLengthUnit,
    },
  }
}
