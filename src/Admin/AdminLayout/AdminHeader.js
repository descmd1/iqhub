import React , { Fragment, useState } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./AdminHeader.module.css"


const Header = () => {

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // const filteredData = data.filter((item) => {
  //   const lowerCaseTitle = item.courseTitle.toLowerCase();
  //   const lowerCaseSearch = searchInput.toLowerCase();
  //   return lowerCaseTitle.includes(lowerCaseSearch);
  // });

  return (
    <>
    <header className={classes.header_container}>
      <div className={classes.logo}>
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
      {/* <div className={classes.headbtn}> */}
      {/* <button className={classes.btn_login}>Login</button> */}
      <button className={classes.btn_login}>Logout</button>
      {/* </div> */}
    </header>
      <div className={classes.card__container}>
      <div className={classes.searchInputContainer}>
        <FaSearch size={18} className={classes.searchIcon} />
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button className={classes.search}>search</button>
      </div>
    </div>
    </>
  );
};

export default Header;
