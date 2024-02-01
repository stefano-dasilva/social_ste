import React from "react";
import styles from "../styles/searchuserchat.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useAppDispatch } from "../../../app/hooks";
import { openSelectchatUser } from "../../../features/MenusFoldSlice";

const SearchUserChat = () => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(openSelectchatUser(false));
  };
  return (
    <div className={styles.Layer}>
      <div className={styles.Wrapper}>
        <div className={styles.Upper}>
          <div className={styles.Title}>
            <IoCloseSharp
              style={{ fontSize: "1.5rem",  cursor : "pointer" }}
              onClick={() => handleClose()}
            />
            <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
              New Message
            </span>
          </div>
          <button className={styles.Button}>Next</button>
        </div>
        <div className={styles.SearchBox}>
          <IoSearch
            style={{ color: "#3293d4", fontSize: "1.5rem", marginLeft: "1rem" }}
          />
          <input
            className={styles.Input}
            type="text"
            placeholder="Search people"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchUserChat;
