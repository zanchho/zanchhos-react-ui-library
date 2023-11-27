import React, { useState } from "react"
import PropTypes from "prop-types"
import UIConfig from "../zanchho.uiconfig"

export const Button = ({
  label,
  wrapperStyle,
  buttonStyle,
  hoverStyle,
  disabledStyle,
  isPreStyled,
  className,
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
  const wrapperStyles = {
    border: `2px solid ${UIConfig.getPrimaryColor()}`,
    padding: "0.6em 1em",
    overflow: "hidden",
    whiteSpace: "wrap",
    borderRadius: "1.6em",
    color: UIConfig.getPrimaryColor(),
    backgroundColor: UIConfig.getSecondaryColor(),
    ...wrapperStyle,
  }

  const buttonStyles = {
    height: "100%",
    width: "100%",
    minWidth: "7ch",
    textAlign: "center",
    color: "inherit",
    background: "inherit",
    border: "hidden",
    overflow: "visible",
    ...buttonStyle,
  }

  const buttonClassName = `${className}`

  const wrapperClass = () => {
    const wrapper = isPreStyled ? wrapperStyles : wrapperStyle
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
      style={{ ...wrapperClass() }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={buttonClassName}
        style={isPreStyled ? buttonStyles : buttonStyle}
        disabled={disabled}
        onClick={onClick}
      >
        <b>{label}</b>
      </button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isPreStyled: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  wrapperStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  hoverStyle: PropTypes.object,
  disabledStyle: PropTypes.object,
}
