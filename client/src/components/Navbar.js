import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const useAuth = () => {
    //get item from localstorage

    const user = localStorage.getItem("user");

    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const location = useLocation();
  const navigation = useNavigate();
  const user = useAuth();

  const logout = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  return (
    <div className="navbar">
      <div className="navlinks">
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/content">Content</Link>
            <Link to="/settings">Settings</Link>
            {location.pathname !== "/login" && (
              <button onClick={logout}>Logout</button>
            )}
          </>
        )}
        {/* {
          !user && <Link to="/login">Login</Link>
        } */}
      </div>
    </div>
  );
}

export default Navbar;
