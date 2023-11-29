import React, { useState } from "react"
import PropTypes from "prop-types"
import UIConfig from "../zanchho.uiconfig"

export const Button = ({
  id,
  label,
  CompStyle,

  hoverStyle,
  disabledStyle,
  isPreStyled,

  disabled,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const handleOnClick = () => {
    if (onClick) onClick()
  }
  const onDisabledStyles = {
    cursor: "not-allowed",
    ...disabledStyle,
  }

  const onHoverStyles = {
    border: `2px solid ${UIConfig.getSecondaryColor()}`,
    backgroundColor: UIConfig.getPrimaryColor(),
    color: UIConfig.getSecondaryColor(),
    ...hoverStyle,
  }
  const CompStyles = {
    minWidth: "7ch",
    border: `2px solid ${UIConfig.getPrimaryColor()}`,
    padding: "0.6em 1em",
    overflow: "hidden",
    whiteSpace: "wrap",
    borderRadius: "1.6em",
    color: UIConfig.getPrimaryColor(),
    backgroundColor: UIConfig.getSecondaryColor(),
    fontWeight: "bold",
    userSelect: "none",
    ...CompStyle,
  }

  const styleClass = () => {
    const wrapper = isPreStyled ? CompStyles : CompStyle
    if (disabled) {
      return { ...wrapper, ...onDisabledStyles }
    }
    if (!isHovered) {
      return { ...wrapper }
    }
    const hover = isHovered ? (isPreStyled ? onHoverStyles : {}) : hoverStyle

    return { ...wrapper, ...hover }
  }

  return (
    <div
      id={id}
      style={{ ...styleClass() }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      onClick={handleOnClick}
      data-testid="button-component"
    >
      {label}
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isPreStyled: PropTypes.bool,

  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  wrapperStyle: PropTypes.object,

  hoverStyle: PropTypes.object,
  disabledStyle: PropTypes.object,
}
