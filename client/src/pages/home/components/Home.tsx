import React, { useState } from "react";
import styles from "../styles/home.module.scss";
import { FaTwitter } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setLoginStep, setRegisterStep } from "../../../features/AuthenticationSlice";
import Register from "./Register";
import Login from "./Login";
import RStep2 from "./RStep2";
import RStep3 from "./RStep3";

const Home = () => {
  const dispatch = useAppDispatch();
  const register_steps = useAppSelector((state) => state.auth.register_steps);
  const login_steps = useAppSelector((state) => state.auth.login_steps);
  const handleOpenRegister = () => {
    dispatch(setRegisterStep(1));
  };
  const handleOpenLogin= () => {
    dispatch(setLoginStep(1));
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <FaTwitter style={{ color: "white", fontSize: "25rem" }} />
        </div>
        <div className={styles.Right}>
          <div className={styles.Upper}>
            <h1 className={styles.Title}>Ciò che c'è di nuovo</h1>
            <div className={styles.Sub}>
              <h3 className={styles.IscHead}>Iscriviti adesso.</h3>
              <button
                className={styles.Crea}
                onClick={() => handleOpenRegister()}
              >
                Crea Account
              </button>
            </div>
          </div>
          <div className={styles.Down}>
            <h5 className={styles.Small}>Hai già un account?</h5>
            <button
              className={styles.LoginButton}
              onClick={() => handleOpenLogin()}
            >
              Accedi
            </button>
          </div>
        </div>
      </div>
      {register_steps === 1 ? <Register /> : ""}
      {register_steps === 2 ? <RStep2 /> : ""}
      {register_steps === 3 ? <RStep3 /> : ""}
      {login_steps === 1 ? <Login /> : ""}
    </>
  );
};

export default Home;
