import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

const Modal = ({ FuncProps, userProp }) => {
  return (
    <div className="modal">
      <div onClick={FuncProps}>
        <ArrowBackIcon />
      </div>
      {/* <Link to="/signup">
        <ArrowBackIcon />
      </Link> */}
      Username : {userProp}
      Registered Successfully!
    </div>
  );
};

export default Modal;
