import React from "react";
import styles from "../styles/selections.module.scss";
import { BiMessageAdd } from "react-icons/bi";
import { useAppSelector } from "../../../app/hooks";
import SearchUserChat from "./SearchUserChat";
import { useDispatch } from "react-redux";
import { openSelectchatUser } from "../../../features/MenusFoldSlice";

const Selections = () => {
  const isSearchUserChatOpen = useAppSelector(
    (state) => state.menus.selectChatUser
  );
  const dispatch = useDispatch();

  const handleOpenChatSelection = () => {
    dispatch(openSelectchatUser(true));
    console.log("ciao")
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Upper}>
          <span style={{ fontSize: "1.5rem" , marginLeft : "1rem"}}>Messages</span>
          <BiMessageAdd
            onClick={() => handleOpenChatSelection()}
            style={{ fontSize: "1.7rem", cursor: "pointer", marginRight : "1rem" }}
          />
        </div>
        <div className={styles.AddChatWrapper}>
          <h1>Welcome to your inbox!</h1>
          <span style={{ color: "#71767b" }}>
            Drop a line, share posts and more with private conversations between
            you and others on Twitter.{" "}
          </span>
          <button className={styles.Button} onClick={()=>handleOpenChatSelection()}>Write a message</button>
        </div>
      </div>
      {isSearchUserChatOpen === true ? <SearchUserChat /> : ""}
    </>
  );
};

export default Selections;
