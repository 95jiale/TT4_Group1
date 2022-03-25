import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function Login() {
  const navigate = useNavigate();


  //handleSubmit
  const handleSubmit = () => {
    //TODO: fetch User API 
    localStorage.setItem("user", "test");
    navigate("/dashboard");
  };

  const routeChange = () => {
    navigate("/register");
  };

  return (
    <div>
      <h2>Login page</h2>
      <p>Please login to continue</p>
      <div className="row mt-3">
        <div className="col-12 d-flex justify-content-start">
          <Button className="btn mx-2" onClick={handleSubmit}>
            Login
          </Button>
          <Button
            variant="link"
            onClick={routeChange}
          >
            Or Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
