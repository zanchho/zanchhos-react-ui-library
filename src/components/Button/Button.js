import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

export const Button = ({
  label,
  style,
  isPreStyled,
  className,
  disabled,
  onClick,
}) => {
  //might wanna use a Wrapper?
  return (
    <button
      className={(isPreStyled ? "button " : "") + className}
      styles={style || "background-color: green;"}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
//shows Types in Storybook might be redundant if using TypeScript
Button.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
  isPreStyled: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
