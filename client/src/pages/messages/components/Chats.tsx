import React from 'react'
import styles from  "../styles/chats.module.scss"

const Chats = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <h1>Select a message</h1>
        <span style={{ color: "#71767b" }}>
          Choose from your existing conversations, start a new one, or just keep
          swimming.{" "}
        </span>
        <button className={styles.Button}>New Message</button>
      </div>
    </div>
  );
}

export default Chats