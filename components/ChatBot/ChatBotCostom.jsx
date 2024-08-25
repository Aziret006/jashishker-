"use client";

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";

import s from "./page.module.scss";
import "./Chat.css";
import Image from "next/image";

const FAQOptions = ({ actionProvider }) => {
  const faqs = [
    { question: "Как создать аккаунт?", id: 1 },
    { question: "Как восстановить пароль?", id: 2 },
  ];

  return (
    <div className={s.buttonFlex}>
      {faqs.map((faq) => (
        <button
          className={s.botName}
          key={faq.id}
          onClick={() => actionProvider.handleFAQ(faq.id)}
        >
          {faq.question}
        </button>
      ))}
    </div>
  );
};

const YesNoOptions = ({ actionProvider }) => (
  <div className={s.btnFlex}>
    <button className={s.botName} onClick={actionProvider.handleYes}>
      Да
    </button>
    <button className={s.botName} onClick={actionProvider.handleNo}>
      Нет
    </button>
  </div>
);

const AskQuestionButton = ({ actionProvider }) => (
  <div className={s.btnFlex}>
    <button className={s.botName} onClick={actionProvider.handleYes}>
      Задать вопрос
    </button>
    <a href="mailto:ernisLoh@example.com" target="_blank">
      <button className={s.botName} onClick={actionProvider.handleNo}>
        Забылиадать вопрос оператору
      </button>
    </a>
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
    {
      widgetName: "askQuestionButton",
      widgetFunc: (props) => <AskQuestionButton {...props} />,
    },
  ],
};

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // You can implement message parsing logic here to handle user inputs dynamically
  }
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
      "Спасибо за обращение! Если у вас появятся вопросы, не стесняйтесь обращаться.",
      { widget: "askQuestionButton" }
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

const ChatBotCustom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={s.ChatBotCustom}>
      <div className={s.button}>
        <Image
          className={s.btnImage}
          onClick={openModal}
          src="/chat.svg"
          width={32}
          height={32}
          alt=""
        />
      </div>
      {isModalOpen && (
        <div className={s.overlay}>
          <div className={s.backdrop}>
            <h3>chatbot</h3>
            <button onClick={closeModal} className={s.closeButton}>
              ×
            </button>
          </div>
          <div className={s.modal}>
            <div>
              <ChatbotComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotCustom;
