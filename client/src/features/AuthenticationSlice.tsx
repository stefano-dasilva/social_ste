import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { date } from "../pages/home/components/Register";

interface inputValues {
  name : string,
  email : string,
  date : date,
  
}

export interface AuthState {
  register_steps: number;
  login_steps: number;
  inputValues : inputValues
}

const initialState: AuthState = {
  register_steps: 0,
  login_steps: 0,
  inputValues : {
    name : "",
    email : "",
    date : {
      day : 0,
      month : "",
      year : 0
    }
  }
};

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegisterStep: (state : AuthState , action: PayloadAction<number>) => {
      state.register_steps = action.payload;
    },
    setLoginStep: (state : AuthState, action: PayloadAction<number>) => {
      state.login_steps = action.payload;
    },
    setGlobalInputValues : (state : AuthState, action: PayloadAction<inputValues>)=>{
      state.inputValues = action.payload
    }
  },
});

export const { setLoginStep, setRegisterStep, setGlobalInputValues } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
