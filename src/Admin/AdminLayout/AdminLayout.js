import React from "react";
import AdminHeader from "../header/Header";
import AdminSideBar from "./SideBar";
import './AdminLayout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <AdminHeader />
      </header>
      <aside>
      <AdminSideBar />
      </aside>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
