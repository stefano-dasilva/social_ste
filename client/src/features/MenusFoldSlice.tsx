import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export interface MenuFoldState {

    tweetMenu : boolean,
    messagesOpen : boolean,
     selectChatUser : boolean

  
}

const initialState: MenuFoldState = {
 tweetMenu : false,
 messagesOpen : false,
 selectChatUser : false
};

const MenusFoldSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {

    openMenuTweet : ( state : MenuFoldState , action : PayloadAction<void>) =>{
      state.tweetMenu = !state.tweetMenu;
    },
    openMessagesMenu : ( state : MenuFoldState , action : PayloadAction<boolean>) =>{
      state.messagesOpen = action.payload;
    },
    openSelectchatUser : ( state : MenuFoldState , action : PayloadAction<boolean>) =>{
      state.selectChatUser = action.payload;
    },
   
  },
});

export const { openMenuTweet, openMessagesMenu, openSelectchatUser } =
  MenusFoldSlice.actions;
export default MenusFoldSlice.reducer;
