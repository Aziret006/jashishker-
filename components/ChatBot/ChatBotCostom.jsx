"use client";

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";

import s from "./page.module.scss";
import "./Chat.css";
import Image from "next/image";
import cm from "classnames";
import { FiX } from "react-icons/fi";
const FAQComponent = ({ actionProvider }) => {
  const faqs = [
    { question: "Как создать аккаунт?", id: 1 },
    { question: "Как восстановить пароль?", id: 2 },
    { question: "Как зарегистрировать бизнес?", id: 3 },
    { question: "Какие налоги я должен платить?", id: 4 },
    { question: "Как получить кредит для бизнеса?", id: 5 },
    { question: "Какие документы нужны для открытия расчетного счета?", id: 6 },
    { question: "Как получить лицензию на ведение бизнеса?", id: 7 },
    { question: "Как выбрать систему налогообложения?", id: 8 },
    { question: "Как зарегистрировать кассовый аппарат?", id: 9 },
    { question: "Как защитить интеллектуальную собственность?", id: 10 },
    { question: "Какие существуют меры поддержки бизнеса?", id: 11 },
    { question: "Как найти клиентов для бизнеса?", id: 12 },
    { question: "Как вести бухгалтерский учет?", id: 13 },
    { question: "Как оформить сотрудников на работу?", id: 14 },
    { question: "Как закрыть бизнес?", id: 15 },
    { question: "Как начать экспорт или импорт товаров?", id: 16 },
    {
      question: "Какие требования к трудовым договорам в Кыргызстане?",
      id: 17,
    },
    { question: "Как получить грант на развитие бизнеса?", id: 18 },
    { question: "Какие требования к рекламе в Кыргызстане?", id: 19 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = faqs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div className={s.buttonFlex}>
        {currentItems.map((faq) => (
          <button
            className={s.botName}
            key={faq.id}
            onClick={() => actionProvider.handleFAQ(faq.id)}
          >
            {faq.question}
          </button>
        ))}
      </div>
      <div className={s.pagination}>
        {Array.from(
          { length: Math.ceil(faqs.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              className={cm(s.pageButton, {
                [s.acc]: currentPage === i + 1,
              })}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
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
      widgetFunc: (props) => <FAQComponent {...props} />,
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
      1: "Для создания аккаунта следуйте инструкциям на странице регистрации. Вам нужно будет указать ваш email, придумать пароль и подтвердить учетную запись.",
      2: "Для восстановления пароля используйте функцию 'Забыли пароль' на странице входа. Введите ваш email, и вы получите инструкцию по восстановлению.",
      3: "Для регистрации бизнеса в Кыргызстане вам нужно выбрать форму собственности (ИП, ООО и т.д.), подготовить необходимые документы и подать их в налоговые органы. Регистрация занимает от 3 до 5 рабочих дней.",
      4: "В зависимости от формы собственности и вида деятельности, вы можете платить различные налоги, такие как налог на доходы, НДС, налог с продаж и другие.",
      5: "Для получения кредита вам нужно подготовить бизнес-план, финансовые отчеты и обратиться в банк или микрофинансовую организацию.",
      6: "Для открытия расчетного счета требуются учредительные документы, свидетельство о регистрации, паспорт руководителя и другие документы.",
      7: "Лицензия требуется для определенных видов деятельности. Для ее получения обратитесь в лицензирующий орган с пакетом документов.",
      8: "Выбор формы налогообложения зависит от объема доходов и типа деятельности. Рекомендуется проконсультироваться с бухгалтером для выбора оптимального варианта.",
      9: "Для регистрации кассового аппарата необходимо обратиться в налоговые органы и предоставить заявление, свидетельство о регистрации и технические документы.",
      10: "Для защиты интеллектуальной собственности можно зарегистрировать товарный знак, патент или авторское право в Государственной службе интеллектуальной собственности.",
      11: "Государство предоставляет программы поддержки малого и среднего бизнеса, такие как льготное кредитование, субсидии и налоговые льготы.",
      12: "Для привлечения клиентов можно использовать интернет-рекламу, социальные сети, участие в выставках и конференциях.",
      13: "Ведение бухгалтерского учета включает регистрацию всех финансовых операций, составление отчетности и уплату налогов.",
      14: "Для оформления сотрудников на работу необходимо заключить трудовой договор, зарегистрировать его в Социальном фонде и налоговых органах.",
      15: "Для закрытия бизнеса необходимо уведомить налоговые органы, рассчитаться с кредиторами и сдать все необходимые отчеты.",
      16: "Для начала экспортно-импортной деятельности необходимо зарегистрироваться как участник ВЭД, получить необходимые лицензии и сертификаты, если это требуется, и ознакомиться с таможенными процедурами.",
      17: "Требования к трудовым договорам в Кыргызстане включают заключение договора в письменной форме с полными данными сторон, условиями оплаты, рабочего времени и другими аспектами.",
      18: "Для получения гранта вам нужно подготовить проект, соответствующий требованиям грантодателя, и подать заявку.",
      19: "Требования к рекламе регулируются Законом Кыргызской Республики “О рекламе”. Реклама должна быть достоверной и не вводить в заблуждение.",
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
            <h3>Жаш Ишкер</h3>
            <button onClick={closeModal} className={s.closeButton}>
              <FiX />
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
