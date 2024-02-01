import React from "react";
import styles from "../style/createtweet.module.scss";
import { AiOutlinePicture } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { exampleProfile } from "../../profile/components/ExampleProfile";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const CreateTweet = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ImageArea}>
        <div className={styles.ImageWrapper}>
          <img className= {styles.Image} src={exampleProfile.profile_pic} alt="profis" />
        </div>
      </div>
      <div className={styles.TweetWrapper}>
        <textarea
          className={styles.Text}
          name="desc"
          id="desc"
          placeholder="What is happening?!"
        ></textarea>
        <div className={styles.Down}>
          <div className={styles.Icons}>
            <AiOutlinePicture />
            <MdOutlineEmojiEmotions/>
            <FaLocationDot />
          </div>
          <button className={styles.Button}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
