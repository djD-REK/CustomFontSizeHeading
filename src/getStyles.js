export const getStyles = ({
  headingFontSizeString,
  textFontSizeNumber,
  cssLengthUnit,
}) => {
  return {
    heading: {
      fontSize: headingFontSizeString,
    },
    text: {
      fontSize: textFontSizeNumber + cssLengthUnit,
    },
  }
}
