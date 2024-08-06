"use client";

import React from "react";
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";

import s from "./page.module.scss";
import "./Chat.css";
const FAQOptions = ({ actionProvider }) => {
  const faqs = [
    { question: "Как создать аккаунт?", id: 1 },
    { question: "Как восстановить пароль?", id: 2 },
  ];

  return (
    <div>
      {faqs.map((faq) => (
        <button key={faq.id} onClick={() => actionProvider.handleFAQ(faq.id)}>
          {faq.question}
        </button>
      ))}
    </div>
  );
};

const YesNoOptions = ({ actionProvider }) => (
  <div>
    <button onClick={() => actionProvider.handleYes()}>Да</button>
    <button onClick={() => actionProvider.handleNo()}>Нет</button>
  </div>
);

const config = {
  botName: "FAQBot",
  initialMessages: [
    createChatBotMessage("Привет! Какие у вас есть вопросы?", {
      widget: "faqOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "faqOptions",
      widgetFunc: (props) => <FAQOptions {...props} />,
    },
    {
      widgetName: "yesNoOptions",
      widgetFunc: (props) => <YesNoOptions {...props} />,
    },
  ],
};

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {}
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleFAQ = (id) => {
    const answers = {
      1: "Для создания аккаунта следуйте инструкциям на странице регистрации.",
      2: "Для восстановления пароля используйте функцию 'Забыли пароль' на странице входа.",
    };

    const message = this.createChatBotMessage(answers[id]);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    setTimeout(() => {
      const followUpMessage = this.createChatBotMessage(
        "Есть ли у вас какие-то еще вопросы?",
        { widget: "yesNoOptions" }
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, followUpMessage],
      }));
    }, 1000);
  };

  handleYes = () => {
    const message = this.createChatBotMessage("Какие у вас есть вопросы?", {
      widget: "faqOptions",
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleNo = () => {
    const message = this.createChatBotMessage(
      "Спасибо за обращение! Если у вас появятся вопросы, не стесняйтесь обращаться."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

const ChatbotComponent = () => {
  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  );
};

const ChatBotCostom = () => {
  return (
    <div className={s.ChatBotCostom}>
      <ChatbotComponent />
    </div>
  );
};

export default ChatBotCostom;
