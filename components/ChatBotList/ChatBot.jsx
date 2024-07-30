// components/ChatbotWidget.js
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Динамический импорт, чтобы избежать проблем на серверной стороне
const Widget = dynamic(
  () => import("react-chat-widget").then((mod) => mod.Widget),
  { ssr: false }
);
const addResponseMessage = dynamic(
  () => import("react-chat-widget").then((mod) => mod.addResponseMessage),
  { ssr: false }
);

const ChatbotWidget = () => {
  useEffect(() => {
    addResponseMessage("Привет! Как я могу помочь вам сегодня?");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`Новое сообщение от пользователя: ${newMessage}`);
    addResponseMessage("Спасибо за ваше сообщение!");
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Чат-бот"
      subtitle="Я здесь, чтобы помочь вам!"
    />
  );
};

export default ChatbotWidget;
