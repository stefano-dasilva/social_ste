import React, { useState } from "react";
import styles from "../../styles/sideleft.module.scss";
import { FaTwitter } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { subrouting } from "./content";
import { content } from "./content";
import Tweet from "../../../pages/tweet/components/Tweet";
import { openMenuTweet } from "../../../features/MenusFoldSlice";
import { exampleProfile } from "../../../pages/profile/components/ExampleProfile";
import { HiDotsHorizontal } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";

const SideLeft = () => {
  const isMenuOpen = useAppSelector((state) => state.menus.tweetMenu);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLogoutOpen,setLogoutOpen] = useState<boolean>(false)

  const handleRoute = (element: string) => {
    navigate(subrouting[element]);
  };

  const OpenPostCreation = () => {
    dispatch(openMenuTweet());
  };
  interface mapping {
    [key: string]: React.ReactElement;
  }

  const mappingList: mapping = {
    Home: (
      <MdHomeFilled
        style={{ color: "white", marginLeft: "0.6rem", fontSize: "1.9rem" }}
      />
    ),
    Explore: (
      <IoSearch
        style={{ color: "white", marginLeft: "0.6rem", fontSize: "1.9rem" }}
      />
    ),
    Notifications: (
      <IoNotifications
        style={{ color: "white", marginLeft: "0.6rem", fontSize: "1.9rem" }}
      />
    ),
    Messages: (
      <IoMdMail
        style={{ color: "white", marginLeft: "0.6rem", fontSize: "1.9rem" }}
      />
    ),
    Bookmarks: (
      <FaBookmark
        style={{ color: "white", marginLeft: "0.6rem", fontSize: "1.9rem" }}
      />
    ),
    Profile: (
      <FaUser
        style={{ color: "white", marginLeft: "0.6rem", fontSize: "1.9rem" }}
      />
    ),
  };

  const handleLogoutOpen = () =>{
    setLogoutOpen((prev)=>!prev)
  }



  const logoutMenu = isLogoutOpen === true ? <div className={styles.LogoutMenu}><span>Logout @{exampleProfile.username}</span></div> : ""
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Upper}>
        <FaTwitter
          style={{
            color: "white",
            marginLeft: "0.6rem",
            fontSize: "1.5rem",
            marginTop: "1rem",
          }}
        />
        <div className={styles.List}>
          {content.map((element, index) => {
            return (
              <div
                key={index}
                className={styles.Element}
                onClick={() => handleRoute(element)}
              >
                {mappingList[element]}
                <span className={styles.SpanElement}>{element}</span>
              </div>
            );
          })}
          <button className={styles.Button} onClick={() => OpenPostCreation()}>
            <span className={styles.SpanPost}>Post</span>
            <LuPencil className={styles.Pencil} />
          </button>
        </div>
      </div>
      <div className={styles.Down}>
        <div className={styles.Left}>
          <div className={styles.ImageWrapper}>
            <img
              className={styles.Image}
              src={exampleProfile.profile_pic}
              alt="prdi"
            />
          </div>
          <div className={styles.Descr}>
            <span>{exampleProfile.name}</span>
            <span style={{ color: "#71767b" }}>@{exampleProfile.username}</span>
          </div>
        </div>
        
        <HiDotsHorizontal
          style={{ color: "white", fontSize: "1.6rem", marginRight: "1rem" }}
          onClick={() => handleLogoutOpen()}
        > 
        </HiDotsHorizontal>
        {logoutMenu}
      </div>
      {isMenuOpen === true ? <Tweet /> : ""}
    </div>
  );
};

export default SideLeft;
