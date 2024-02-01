import React from "react";
import styles from "../styles/bookmarks.module.scss";
import { exampleProfile } from "../../profile/components/ExampleProfile";

const Bookmarks = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.TitleWrapper}>
        <span style={{marginLeft : "1rem", fontSize : "1.5rem"}}>Bookmarks</span>
        <span style={{ color: "#71767b", marginLeft : "1rem" }}>@{exampleProfile.username}</span>
      </div>
    </div>
  );
};

export default Bookmarks;
