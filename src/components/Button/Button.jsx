import React from "react";
import { default as MuiButton } from "@mui/material/Button";
import "./Button.css";
import PropTypes from "prop-types"

const Button = ({ color, variant, onClick, raised = true, rgb = false }) => {
  return (
    <MuiButton
      className={`custom-button ${rgb ? "rgb" : ""}`}
      color={color}
      variant={variant}
      onClick={onClick}
      disableElevation={!raised}
    >
      Texto
    </MuiButton>
  );
};

export default Button;

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success", "info"]),
  variant: PropTypes.oneOf(["contained", "outlined"]),
  raised: PropTypes.bool,
  rgb: PropTypes.bool
}
