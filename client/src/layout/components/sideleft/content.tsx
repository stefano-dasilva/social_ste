const content = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Profile",
];

interface mapRouting {
  [key: string]: string;
}

const subrouting: mapRouting = {
  Home: "/feed",
  Bookmarks: "/bookmarks",
  Profile: "/profile",
  Messages : "/messages"
};

export { content , subrouting};
