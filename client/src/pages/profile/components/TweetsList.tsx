import React from "react";
import styles from "../styles/tweetslist.module.scss";
import { tweets } from "./ExampleProfile";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { exampleProfile } from "./ExampleProfile";

const TweetsList = () => {
  return (
    <div className={styles.Wrapper}>
      {tweets.map((tweet, index) => {
        return (
          <div
            key={index}
            style={{ width: "100%", borderBottom: "0.01px solid #71767b" }}
          >
            <div className={styles.TweetWrapper}>
              <div className={styles.ImageWrapper}>
                <img
                  className={styles.Image}
                  src={exampleProfile.profile_pic}
                  alt="exprof"
                />
              </div>
              <div className={styles.Info}>
                <span style={{ fontWeight: "bold" }}>{tweet.author.name}</span>
                <span style={{ color: "#71767b" }}>
                  @{tweet.author.username}
                </span>
                <span style={{ color: "#71767b" }}>{tweet.time}</span>
              </div>
              <p className={styles.Descr}>{tweet.tweet}</p>
              <div className={styles.IconBar}>
                <div className={styles.ReactionContainer}>
                  <FaRegComment />
                  <span className={styles.Number}>{tweet.commenti}</span>
                </div>
                <div className={styles.ReactionContainer}>
                  <FaRetweet />
                  <span className={styles.Number}>{tweet.retweet}</span>
                </div>
                <div className={styles.ReactionContainer}>
                  <FaRegHeart />
                  <span className={styles.Number}>{tweet.likes}</span>
                </div>
                <div className={styles.ReactionContainer}>
                  <FaRegBookmark />
                  <span className={styles.Number}>{tweet.bookmarks}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TweetsList;
