import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import Logo from "../Components/img/logo.png";
import '../App.css'; 

const Navbar = () => {
//   const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          {["art", "science", "technology", "cinema", "design", "food"].map(category => (
            <Link className="link" key={category} to={`/?cat=${category}`}>
              <h6>{category.toUpperCase()}</h6>
            </Link>
          ))}
          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span className="link logout" onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
