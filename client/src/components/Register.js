import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    //TODO: fetch User API
    localStorage.setItem("user", "test");
    navigate("/dashboard");
  };

  const routeChange = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Registration page</h2>
      <p>Please register to continue</p>
      <div className="row mt-3">
        <div className="col-12 d-flex justify-content-start">
          <Button className="mx-2" onClick={handleSubmit}>
            Register
          </Button>
          <Button
            variant="link"
            onClick={routeChange}
          >
            Or Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
