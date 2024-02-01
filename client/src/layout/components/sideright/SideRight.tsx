import React from "react";
import styles from "../../styles/sideright.module.scss";
import WhoToFollow from "./WhoToFollow";
import Trends from "./Trends";
import { IoSearch } from "react-icons/io5";
import { useAppSelector } from "../../../app/hooks";

const SideRight = () => {
  const isMessagesOpen = useAppSelector((state) => state.menus.messagesOpen);

  if (isMessagesOpen) {
    return null; 
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Search}>
        <IoSearch style={{ color: "#71767B", fontSize: "1.6rem " }} />
        <input
          className={styles.Input}
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <WhoToFollow />
      <Trends />
    </div>
  );
};

export default SideRight;
