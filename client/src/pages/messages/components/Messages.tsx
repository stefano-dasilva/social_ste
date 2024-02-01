import React, { useEffect } from "react";
import styles from "../styles/messages.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openMessagesMenu } from "../../../features/MenusFoldSlice";
import Selections from "./Selections";
import Chats from "./Chats";

const Messages = () => {
  const dispatch = useAppDispatch();
  const messagesOpen = useAppSelector((state) => state.menus.messagesOpen);

  useEffect(() => {
    dispatch(openMessagesMenu(true));

    return () => {
      dispatch(openMessagesMenu(false));
    };
  }, []);

  console.log(messagesOpen);

  return (
    <div className={styles.Wrapper}>
      <Selections/>
      <Chats/>
    </div>
  );
};

export default Messages;
