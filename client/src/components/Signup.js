import "../styles/signup.css";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import Header from "./Header";


// import Axios from 'axios'

function Signup() {

  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  //  const register = () => {
  //   Axios.post(API_URL), {
  //     phoneNumber: phoneNumber,
  //     password: password,
  //   }
  // }

  //input value state
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [values2, setValues2] = useState({
    password: "",
    confirmPassword: "",
  });
  //modal state
  const [isModalActive, setIsModalActive] = useState(false);

  const isFunc = () => {
    setIsModalActive(false);
  };
  //inputs constant for username email and birthday
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include special characters!",
      label: "Name :",
      pattern: "^[A-Za-z0-9]{3,16}$", //regex
      required: true,
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "Invalid address!",
      label: "Address :",
      required: true,
    },
    {
      id: 3,
      name: "Phone number",
      type: "text",
      placeholder: "Phone number",
      pattern: "^[0-9]{8}$",
      errorMessage: "Invalid number!",
      label: "Phone number :",
    },
  ];
  //input constant for pw and cpw
  const inputs2 = [
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and it should include at least 1 uppercase letter, 1 number, 1 special character!",
      label: "Password :",
      pattern:
        "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password :",
      pattern: values.password,
      required: true,
    },
  ];
  //handlesubmit function
  const handleSubmit = (e) => {
    setIsModalActive(true);
    e.preventDefault();
    console.log(values);
    console.log(values2);
  };
  //onChanges on the values key in on the input
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setValues2({ ...values2, [e.target.name]: e.target.value });
  };
  //main component code
  return (
    <div className="Signup">
      {/* <Header className="header" /> */}
      <Link to="/" className="back-arrow">
        <ArrowBackIcon />
      </Link>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            // if (input.id !== 4 || 5) {
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {inputs2.map((input) => (
            <PasswordInput
              key={input.id}
              {...input}
              value={values2[input.name]}
              onChange2={onChange2}
            />
          ))}
          {/* <button className="submit-btn" onClick={register}>Submit</button> */}
          <button className="submit-btn" >Submit</button>
        </form>
        {isModalActive && (
          <Modal FuncProps={isFunc} userProp={values.username} />
        )}
      </div>
    </div>
  );
}

export default Signup;
