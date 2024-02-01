import React, { useState } from "react";
import styles from "../styles/switchers.module.scss";

const Switchers = () => {

    const [selectedButton, setSelectedButton] = useState("Posts")

     const handleClick = (value : string) =>{
        setSelectedButton(value)
        console.log(value)
     }
  return (
    <div className={styles.Wrapper}>
      <button
        className={`${styles.Button} ${
          selectedButton === "Posts" ? styles.selected : styles.unselected
        }`}
        onClick={() => handleClick("Posts")}
      >
        <span
          className={` ${selectedButton === "Posts" ? styles.Border : styles.Hidden}`}
        ></span>
        Posts
      </button>
      <button
        className={`${styles.Button} ${
          selectedButton === "Replies" ? styles.selected : styles.unselected
        }`}
        onClick={() => handleClick("Replies")}
      >
        <span
          className={` ${selectedButton === "Replies" ? styles.Border : styles.Hidden}`}
        ></span>
        Replies
      </button>
      <button
        className={`${styles.Button} ${
          selectedButton === "Likes" ? styles.selected : styles.unselected
        }`}
        onClick={() => handleClick("Likes")}
      >
        <span
          className={` ${selectedButton === "Likes" ? styles.Border : styles.Hidden}`}
        ></span>
        Likes
      </button>
    </div>
  );
};

export default Switchers;
