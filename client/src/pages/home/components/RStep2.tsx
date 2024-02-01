import React, { useState } from "react";
import styles from "../styles/rstep2.module.scss";
import { IoArrowBackOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setGlobalInputValues,
  setRegisterStep,
} from "../../../features/AuthenticationSlice";
import { inputvalues } from "./Register";

const RStep2 = () => {
  const dispatch = useAppDispatch();
  const payload = useAppSelector((state) => state.auth.inputValues);

  const [inputValues, setInputValues] = useState<inputvalues>({
    name: payload.name,
    email: payload.email,
  });

  const register_steps = useAppSelector((state) => state.auth.register_steps);

  const handleClose = () => {
    dispatch(setRegisterStep(1));
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

  const handleNext = (event: any) => {
    const new_payload = {
      name: inputValues.name,
      email: inputValues.email,
      date: payload.date,
    };
    event.preventDefault();
    dispatch(setGlobalInputValues(new_payload));
    dispatch(setRegisterStep(3));
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
            <span className={styles.Steps}>Step 2 di 3</span>
          </div>
          <div className={styles.Content}>
            <h1 className={styles.Title}>Crea il tuo Account</h1>
            <div className={styles.Inputs}>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                value={inputValues.name}
                onChange={(event) => handleInput(event, "name")}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={inputValues.email}
                onChange={(event) => handleInput(event, "email")}
              />
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Data"
                value={
                  payload.date.day +
                  " " +
                  payload.date.month +
                  " " +
                  payload.date.year
                }
              />
            </div>
          </div>
          <div className={styles.NextWrapper}>
            <button className={styles.Next} onClick={handleNext}>
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RStep2;
