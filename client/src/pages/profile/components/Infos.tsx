import React from "react";
import { exampleProfile } from "./ExampleProfile";
import styles from "../styles/infos.module.scss";

export const Infos = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Buttons}>
        <button className={styles.Button}>Follow</button>
      </div>
      <div className={styles.Infos}>
        <div className={styles.Names}>
          <span>{exampleProfile.name}</span>
          <span style={{ color: "#71767b" }}>@{exampleProfile.username}</span>
        </div>
        <div className={styles.DescWrapper}>
          <p>{exampleProfile.desc}</p>
        </div>
        <div className={styles.Follow}>
          <span>
            {exampleProfile.following}{" "}
            <span style={{ color: "#71767b" }}>Following</span>
          </span>
          <span>
            {exampleProfile.followers}K{" "}
            <span style={{ color: "#71767b" }}>Followers</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
