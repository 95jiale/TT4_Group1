import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState("");

  //toggling show/hide pw
  const toggleP = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleChangePW = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  //handleSubmit
  const handleSubmit = () => {
    //TODO: fetch User API
    localStorage.setItem("user", "test");
    navigate("/dashboard");
  };

  const routeChange = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h2>Login page</h2>
      <p>Please login to continue</p>
      <label>Username :</label>
      <input
        type="text"
        placeholder="input username here"
        pattern="^[A-Za-z0-9]{3,16}$"
      />
      <label>Email :</label>
      <input type="email" placeholder="input email here" />
      <label>Date of Birth :</label>
      <input type="date" />
      <label>Password :</label>
      <container>
        <input
          type={showPassword ? "password" : "text"}
          placeholder="input password here"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          onChange={handleChangePW}
        />
        <button className="show-password" onClick={toggleP}>
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </container>
      <div className="row mt-3">
        <div className="col-12 d-flex justify-content-start">
          <Button className="btn mx-2" onClick={handleSubmit}>
            Login
          </Button>
          <Button variant="link" onClick={routeChange}>
            Or Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
