import React, { useState } from "react";
import styles from "../styles/login.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useAppDispatch } from "../../../app/hooks";
import { setLoginStep } from "../../../features/AuthenticationSlice";
import { FaTwitter } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  interface inputvalues {
    username: string;
    password: string;
  }

  const navigate = useNavigate()

  const   handleLogin =  async () =>{
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username: inputValues.username,
        password: inputValues.password,
      });
      window.localStorage.setItem("username", response.data.username);
      navigate("/home")
    }
    catch(err){
      console.log(err)
    }
  }

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof inputvalues
  ) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const [inputValues, setInputValues] = useState<inputvalues>({
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setLoginStep(0));
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <form className={styles.Form}>
          <div className={styles.Upper}>
            <IoCloseSharp
             style={{marginLeft : "1rem"}}
              className={styles.Close}
              onClick={() => handleClose()}
            />
            <FaTwitter  style={{fontSize : "1.6rem"}} />
          </div>
          <div className={styles.Content}>
            <h1 className={styles.Title}>Accedi a Twitter</h1>
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
            </div>
          </div>
          <div className={styles.NextWrapper}>
            <button className={styles.Next} onClick={()=>handleLogin()}>Accedi</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
