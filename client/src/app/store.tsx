import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "../features/AuthenticationSlice";
import MenusFoldSlice from "../features/MenusFoldSlice";
const store = configureStore({
  reducer: {
    auth: AuthenticationSlice,
    menus: MenusFoldSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
