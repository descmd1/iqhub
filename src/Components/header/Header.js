import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="btn_login">Login</button>
    </header>
  );
};

export default Header;
