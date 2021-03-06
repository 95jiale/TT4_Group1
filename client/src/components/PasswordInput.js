import React, { useState } from "react";
import "../styles/passwordInput.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { label, errorMessage, onChange2, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const toggle = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="passwordInput">
      <label>{label}</label>

      <input
        {...inputProps}
        onChange={onChange2}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        type={showPassword ? "password" : "text"}
      />
      <button className="showPassword" onClick={toggle}>
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </button>
      <span>{errorMessage}</span>
    </div>
  );
};

export default PasswordInput;
