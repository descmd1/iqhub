import React from "react";
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
  FcUploa,
  FcBusinessman,
} from "react-icons/fc";

const SideBar = () => {
  return (
    <div className={classes.sidebar__container}>
      <div>
        <FcBusinessman size={24} />
      </div>
      <div className={classes.sidebar__items}>
        <BiSolidGridAlt size={24} />
        <span>Dashboard</span>
      </div>
      <div className={classes.sidebar__items}>
        <BiSolidLayer size={24} />
        <span>Modules</span>
      </div>
      <div className={classes.sidebar__items}>
        <FaBookOpen size={24} />
        <span>Assignment</span>
      </div>
      <div className={classes.sidebar__items}>
        <AiOutlineSetting size={24} />
        <span>Setting</span>
      </div>
    </div>
  );
};
export default SideBar;
