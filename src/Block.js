import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  return (
    <React.Fragment>
      <h1 className={css(classes.customBlockHeading)}>{props.heading}</h1>
      <p className={css(classes.customBlockHeading)}></p>
    </React.Fragment>
  )
}

Block.defaultProps = defaultConfig

export default Block
