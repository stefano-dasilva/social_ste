import React from "react";
import styles from "../style/feed.module.scss";
import {
  exampleProfile,
  tweets,
} from "../../profile/components/ExampleProfile";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import CreateTweet from "./CreateTweet";

const Feed = () => {
  return (
    <div className={styles.Wrapper}>
      <CreateTweet />
      <div className={styles.TweetListWrapper}>
        {tweets.map((tweet, index) => {
          return (
            <div
              style={{ width: "100%", borderBottom: "0.01px solid #71767b" }}
            >
              <div className={styles.TweetWrapper} key={index}>
                <div className={styles.ImageArea}>
                  <img
                    className={styles.Image}
                    src={exampleProfile.profile_pic}
                    alt="profile_pric"
                  />
                </div>
                <div className={styles.Info}>
                  <span style={{ fontWeight: "bold" }}>
                    {tweet.author.name}
                  </span>
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
    </div>
  );
};

export default Feed;
