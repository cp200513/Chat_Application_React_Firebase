import React from "react";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import { useState } from "react";
import Notification from "./components/notification/Notification";

const App = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
