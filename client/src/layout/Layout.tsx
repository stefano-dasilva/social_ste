import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import SideLeft from "./components/sideleft/SideLeft";
import SideRight from "./components/sideright/SideRight";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <SideLeft />
        <Outlet />
        <SideRight />
      </div>
    </>
  );
};

export default Layout;
