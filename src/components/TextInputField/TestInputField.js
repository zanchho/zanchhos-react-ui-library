import React, { useState } from "react"
import PropTypes from "prop-types"
import UIConfig from "../zanchho.uiconfig"

export const TestInputField = ({ id, placeholder, disabled }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const styleClass = () => {
    return []
  }
  //WIP
  return (
    <div
      id={id}
      style={{ ...styleClass() }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      data-testid="testinputfield-component"
    ></div>
  )
}
