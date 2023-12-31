import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import classes from "./Header.module.css"
import { useAuth } from "../../utils/Auth";
import { Link } from "react-router-dom";


const Header = () => {
  const auth = useAuth()
const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleLogout = () => {
    // auth.logout()
    navigate('/')
  }

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
            Courses
          </li>
          <li>
            About Us
          </li>
          <li>
            Article
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
      <div className={classes.headbtn}>
        {/* {
         !auth.user && (
       
         ) 
        } */}
     <Link to='/login'> <button className={classes.btn_login}>Login</button>   </Link>
      <button className={classes.btn_login} onClick={handleLogout}>Logout</button>
      </div>
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
