import React, { useState } from "react"
import PropTypes from "prop-types"
import UIConfig from "../zanchho.uiconfig"

export const TextInputField = ({
  id,
  defaultValue,
  placeholder,

  onBlur,
  onChange,

  alwaysFilled,
  disabled,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [val, setVal] = useState(defaultValue || "")
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const CompStyles = {
    border: `2px solid ${UIConfig.getPrimaryColor()}`,
    padding: "0.6em 1em",
    overflow: "hidden",
    whiteSpace: "wrap",
    borderRadius: "1.6em",
    color: UIConfig.getPrimaryColor(),
    backgroundColor: UIConfig.getSecondaryColor(),
    fontWeight: "bold",
    cursor: "text",
  }

  const handleChange = e => {
    console.log(e.target.value)
    setVal(e.target.value)
    if (onChange) onChange(e)
  }

  const handleBlur = e => {
    let newEv = e
    if (
      alwaysFilled &&
      (!e.target || !e.target.value || e.target.value.length === 0)
    ) {
      newEv.target.value = defaultValue || placeholder || "default"
      handleChange(newEv)
    }

    if (onBlur) onBlur(newEv)
  }
  const styleClass = () => {
    return []
  }
  //WIP id={id}
  return (
    <input
      style={CompStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
      contentEditable={!disabled}
      value={val}
      placeholder={placeholder || ""}
      data-testid="testinputfield-component"
    ></input>
  )
}
TextInputField.propTypes = {
  alwaysFilled: PropTypes.bool,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}
