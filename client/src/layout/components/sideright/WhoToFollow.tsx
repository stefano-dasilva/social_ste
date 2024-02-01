import React from 'react'
import styles from "../../styles/whotofollow.module.scss"
import { data } from './dummydata'

const WhoToFollow = () => {
  return (
    <div className={styles.Wrapper}>
        <h2 className={styles.Title}>You might like</h2>
        <div className={styles.List}>
            {data.map((element, index)=>{
                return (
                  <div key={index} className={styles.Element}>
                    <div className={styles.Info}>
                      <div className={styles.ImageWrapper}>
                        <img
                          className={styles.Image}
                          src={element.image}
                          alt="image"
                        />
                      </div>
                      <div className={styles.Username}>
                        <span>{element.name}</span>
                        <span style={{ color: "#71767b" }}>
                          @{element.username}
                        </span>
                      </div>
                    </div>
                    <button className={styles.Button}>Follow</button>
                  </div>
                );
            })}
           
        </div>
    </div>
  )
}

export default WhoToFollow