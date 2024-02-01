import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.scss";
import { IoArrowBackOutline } from "react-icons/io5";
import { exampleProfile } from "./ExampleProfile";
import { Infos } from "./Infos";
import Switchers from "./Switchers";
import TweetsList from "./TweetsList";

const Profile = () => {
  const [Scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
     const handleScroll = () => {
       const isScrolled = window.scrollY > 0;
       setScrolled(isScrolled);
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
  }, []);
  return (
    <div className={styles.Wrapper}>
      <div className={`${styles.Header} ${Scrolled ? styles.scrolled : ""}`}>
        <IoArrowBackOutline />
        <div className={styles.Informations}>
          <span style={{ fontWeight: "700", fontSize: "1rem" }}>
            {exampleProfile.name}
          </span>
          <span style={{ fontSize: "0.7rem" }}>
            {exampleProfile.posts}K posts
          </span>
        </div>
      </div>
      <div className={styles.BackWrapper}>
        <img
          className={styles.BackImage}
          src={exampleProfile.back}
          alt="back"
        />
        <div className={styles.profilePicWrapper}>
          <img
            className={styles.ProfilePic}
            src={exampleProfile.profile_pic}
            alt="profile_pic"
          />
        </div>
      </div>
      <Infos />
      <Switchers />
      <TweetsList />
    </div>
  );
};

export default Profile;
