import React, { useState } from "react";
import styles from "../styles/register.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { Months } from "./calendar";
import { daysInMonth } from "./calendar";
import { year } from "./calendar";
import RStep2 from "./RStep2";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setRegisterStep,
  setGlobalInputValues,
} from "../../../features/AuthenticationSlice";

export interface date {
  month: string;
  day: number;
  year: number;
}

export interface inputvalues {
  name: string;
  email: string;
}

const Register = () => {
  const dispatch = useAppDispatch();

  const [inputValues, setInputValues] = useState<inputvalues>({
    name: "",
    email: "",
  });

  const [date, setDate] = useState<date>({
    month: "",
    day: 1,
    year: 0,
  });

  const register_steps = useAppSelector((state) => state.auth.register_steps);
  const handleDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: keyof date
  ) => {
    setDate((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleClose = () => {
    dispatch(setRegisterStep(0));
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof inputvalues
  ) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

    console.log(inputValues)
  };
  const handleNext = () => {
    const inputdata = {
      name: inputValues.name,
      email: inputValues.email,
      date: date,
    };

    dispatch(setRegisterStep(2));
    dispatch(setGlobalInputValues(inputdata));
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <form className={styles.Form}>
          <div className={styles.Upper}>
            <IoCloseSharp
              className={styles.Close}
              onClick={() => handleClose()}
            />
            <span className={styles.Steps}>Step 1 di 3</span>
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
            </div>
            <div className={styles.DownInputs}>
              <h3>Data di Nascita</h3>
              <p style={{ color: "#71767b" }}>
                Non sarà visibile pubblicamente. Conferma la tua età, anche se
                questo account è per un'azienda, un animale o qualcos'altro.
              </p>
              <div className={styles.Options}>
                <label htmlFor="Mese"></label>
                <select
                  id="Mese"
                  name="Mese"
                  onChange={(event) => handleDateChange(event, "month")}
                >
                  {Months.map((month, index) => {
                    return (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="Giorno"></label>
                <select
                  id="Giorno"
                  name="Giorno"
                  onChange={(event) => handleDateChange(event, "day")}
                >
                  {daysInMonth[date?.month]?.map((day, index) => {
                    return (
                      <option key={index} value={day}>
                        {day || 1}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="Anno"></label>
                <select
                  id="Anno"
                  name="Anno"
                  onChange={(event) => handleDateChange(event, "year")}
                >
                  {year.map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className={styles.NextWrapper}>
            <button className={styles.Next} onClick={() => handleNext()}>
              Avanti
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
