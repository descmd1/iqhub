import React from "react";
import Header from "../header/Header";
import SideBar from "./SideBar";
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <aside>
      <SideBar />
      </aside>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
