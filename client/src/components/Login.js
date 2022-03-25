import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { Button } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import Axios from 'axios'

function Login() {
  const [showPassword, setShowPassword] = useState(true);
<<<<<<< HEAD
  // const [modal, setModal] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const register = () => {
  //   Axios.post(API_URL, {
  //     phoneNumber: phoneNumber,
  //     password: password,
  //   }).then((response) => {
  //   console.log(response));
  //   });
  // };
=======
  const [queryNum, setQueryNum] = useState("");
  const [queryPW, setQueryPW] = useState("");
  const [container, setContainer] = useState(null);
  const [endPoint, setEndPoint] = useState("");
  // const [password, setPassword] = useState("");
  // const [num, setNum] = useState("");
>>>>>>> 423d3a7cfb0366361e52d13505abf959816301d5

  //toggling show/hide pw
  const toggleP = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleChangePW = (e) => {
    setQueryPW(e.target.value);
  };
  const handleChangeNum = (e) => {
    setQueryNum(e.target.value);
  };

  const navigate = useNavigate();

  //handleSubmit
  const handleSubmit = (e) => {
    //TODO: fetch User API
    e.preventDefault();
    setEndPoint(queryNum, queryPW);
    localStorage.setItem("user", "test");
    navigate("/dashboard");
  };

  const routeChange = () => {
    navigate("/signup");
  };

  return (
<<<<<<< HEAD
    <div className="login-page">
      <h2>Login page</h2>
      <p>Please login to continue</p>
      <container className="phone">
        <label>Phone number :</label>
        <input
          type="text"
          placeholder="input phone number here "
          pattern="^[0-9]{8}$"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </container>
      <container>
        <label>Password :</label>
        <input
          type={showPassword ? "password" : "text"}
          placeholder="input password here"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="show-password" onClick={toggleP}>
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </container>
      <div className="row mt-3">
        <div className="col-12 d-flex align-item-center justify-content-start">
          <Button className="btn mx-2" onClick={handleSubmit}>
            Login
          </Button>
          <Button variant="link" onClick={routeChange}>
            Or Register
          </Button>
=======
    <div>
      <form className="login-page">
        <h2>Login page</h2>
        <p>Please login to continue</p>
        <container className="phone">
          <label>Phone number :</label>
          <input
            value={queryNum}
            type="text"
            placeholder="input phone number here"
            pattern="^[0-9]{8}$"
            onChange={handleChangeNum}
          />
        </container>
        <container>
          <label>Password :</label>
          <input
            value={queryPW}
            type={showPassword ? "password" : "text"}
            placeholder="input password here"
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            onChange={handleChangePW}
          />
          <button className="show-password" onClick={toggleP}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </container>
        <div className="row mt-3">
          <div className="col-12 d-flex align-item-center justify-content-start">
            <Button className="btn mx-2" onClick={handleSubmit}>
              Login
            </Button>
            <Button variant="link" onClick={routeChange}>
              Or Register
            </Button>
          </div>
>>>>>>> 423d3a7cfb0366361e52d13505abf959816301d5
        </div>
      </form>
    </div>
  );
}

export default Login;
