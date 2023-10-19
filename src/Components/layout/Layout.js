import React from "react";
import Header from "../header/Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <SideBar />
      <main>{children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};
export default Layout;
