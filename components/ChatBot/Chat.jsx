import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import logo from "./logo.svg";
const Chat = () => {
  useEffect(() => {
    addResponseMessage("Welcome to this **awesome** chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />
    </div>
  );
};

export default Chat;
