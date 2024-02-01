import React from "react";
import styles from "../styles/tweet.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { exampleProfile } from "../../profile/components/ExampleProfile";
import {  useAppDispatch } from "../../../app/hooks";
import { openMenuTweet } from "../../../features/MenusFoldSlice";

const Tweet = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(openMenuTweet());
  };
  return (
    <div className={styles.Wrapper}>
      <form className={styles.Form}>
        <div className={styles.Navigation}>
          <IoCloseSharp
            onClick={() => handleClose()}
            style={{ color: "white", fontSize: "2rem", marginLeft: "0.6rem", cursor : "pointer"}}
          />
        </div>
        <div className={styles.Content}>
          <div className={styles.ImageArea}>
            <div className={styles.ImageWrapper}>
              <img
                className={styles.Image}
                src={exampleProfile.profile_pic}
                alt="profiel"
              />
            </div>
          </div>
          <textarea
            className={styles.Text}
            name="desc"
            id="desc"
            placeholder="What is happening?!"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div className={styles.Options}>
          <div className={styles.Icons}>
            <AiOutlinePicture />
            <BsEmojiSmile />
            <CiLocationOn />
          </div>
          <button className={styles.Post}>Post</button>
        </div>
      </form>
    </div>
  );
};

export default Tweet;
