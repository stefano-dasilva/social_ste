import React from "react";
import "./App.css";
import Feed from "./pages/feed/components/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Tweet from "./pages/tweet/components/Tweet";
import Bookmarks from "./pages/bookmarks/components/Bookmarks";
import Notifications from "./pages/notifications/components/Notifications";
import Messages from "./pages/messages/components/Messages";
import Profile from "./pages/profile/components/Profile";
import Explore from "./pages/explore/components/Explore";
import Home from "./pages/home/components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route element={<Layout />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/tweet" element={<Tweet />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
