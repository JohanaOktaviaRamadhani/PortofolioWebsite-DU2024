import { React } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <div >
      <Navbar />
        <main>{children}</main>
        <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;
