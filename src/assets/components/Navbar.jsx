import React from "react";
import "../style/navbar.css";

const Navbar = ({ setIsModalShow, setDarkMode, darkMode }) => {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="containtNavbar">
      <div>
        <h3>User Page</h3>
      </div>
      <div className="btnCreateUser">
        <button onClick={() => setIsModalShow(true)}>Create User</button>
      </div>
      <div className="btnDarkMode">
        <button onClick={() => handleDarkMode()}>☀</button>
      </div>
    </nav>
  );
};

export default Navbar;
