import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setRegisterStep } from "../../../features/AuthenticationSlice";
import styles from "../styles/rstep3.module.scss";
import { IoArrowBackOutline } from "react-icons/io5";
import { date } from "./Register";
import axios from "axios";

const RStep3 = () => {
  interface inputvalues {
    username: string;
    password: string;
    ripetipassword: string;
  }

  const payload = useAppSelector((state) => state.auth.inputValues);

  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState<inputvalues>({
    username: "",
    password: "",
    ripetipassword: "",
  });

  const RegisterAPI = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username: inputValues.username,
        password: inputValues.password,
        date: payload.date,
        name: payload.name,
        email: payload.email,
      });
      window.localStorage.setItem("username", response.data.username);
      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof inputvalues
  ) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setRegisterStep(2));
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <form className={styles.Form}>
          <div className={styles.Upper}>
            <IoArrowBackOutline
              className={styles.Close}
              onClick={() => handleClose()}
            />
            <span className={styles.Steps}>Step 3 di 3</span>
          </div>
          <div className={styles.Content}>
            <h1 className={styles.Title}>Crea il tuo Account</h1>
            <div className={styles.Inputs}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={inputValues.username}
                onChange={(event) => handleInput(event, "username")}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={inputValues.password}
                onChange={(event) => handleInput(event, "password")}
              />
              <input
                type="ripetipassword"
                name="ripetipassword"
                id="ripetipassword"
                placeholder="Ripeti Password"
                value={inputValues.ripetipassword}
                onChange={(event) => handleInput(event, "ripetipassword")}
              />
            </div>
          </div>
          <div className={styles.NextWrapper}>
            <button className={styles.Next} onClick={() => RegisterAPI()}>
              Iscriviti
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RStep3;
