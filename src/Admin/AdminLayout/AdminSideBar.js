import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import {
  AiOutlineMore,
  AiOutlineSetting,
  AiTwotoneEdit,
  AiOutlineLink,
  AiFillCaretRight,
} from "react-icons/ai";

import {
  BiTrash,
  BiSolidGridAlt,
  BiSolidUserRectangle,
  BiSolidLayer,
  BiSolidLandmark,
} from "react-icons/bi";

import { BsBookmark, BsCheckAll, BsFillTelephoneFill } from "react-icons/bs";
import {
  FaBookmark,
  FaBookOpen,
  FaList,
  FaTiktok,
  FaTwitter,
  FaSquareFacebook,
  FaAlignJustify,
  FaToggleOn,
  FaUserGraduate,
  FaPaperclip,
} from "react-icons/fa6";

import { FaRegThumbsUp } from "react-icons/fa";

import {
  IFcCheckmark,
  FcDownload,
  FcUpload,
  FcBusinessman,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const SideBar = () => {
 
  return (
    <div className={classes.sidebar__container}>
      <div>
        <FcBusinessman size={24} />
      </div>
      <Link to="/dashboard">
        <div className={classes.sidebar__items}>
          <BiSolidGridAlt size={24} />
          <span>Dashboard</span>
        </div>
      </Link>
      <div className={classes.sidebar__items}>
        <FaBookOpen size={24} />
        <span>Courses</span>
      </div>
      <div className={classes.sidebar__items}>
        <BiSolidLayer size={24} />
        <span>publications</span>
      </div>
      <Link to="/submit-assignment">
        <div className={classes.sidebar__items}>
          <FaBookOpen size={24} />
          <span>Assignment</span>
        </div>
      </Link>
<Link to='/reset-user'>
      <div className={classes.sidebar__items} >
        <AiOutlineSetting size={24} />
        <span>Setting</span>   
      </div>
      </Link>
    </div>
  );
};
export default SideBar;
