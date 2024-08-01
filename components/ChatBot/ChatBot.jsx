import ChatBot from "react-simple-chatbot";
import React from "react";
// @ts-ignore
const chatContainerStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const SimpleForm = () => {
  return (
    <div style={chatContainerStyle}>
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Какие у вас вопросы?",
            trigger: "question",
          },
          {
            id: "question",
            options: [
              {
                value: "faq1",
                label: "Часто задаваемый вопрос 1",
                trigger: "faq1",
              },
              {
                value: "faq2",
                label: "Часто задаваемый вопрос 2",
                trigger: "faq2",
              },
              {
                value: "faq3",
                label: "Часто задаваемый вопрос 3",
                trigger: "faq3",
              },
            ],
          },
          {
            id: "faq1",
            message: "Ответ на часто задаваемый вопрос 1.",
            trigger: "moreQuestions",
          },
          {
            id: "faq2",
            message: "Ответ на часто задаваемый вопрос 2.",
            trigger: "moreQuestions",
          },
          {
            id: "faq3",
            message: "Ответ на часто задаваемый вопрос 3.",
            trigger: "moreQuestions",
          },
          {
            id: "moreQuestions",
            message: "Есть ли у вас еще вопросы?",
            trigger: "moreQuestionsResponse",
          },
          {
            id: "moreQuestionsResponse",
            options: [
              { value: "yes", label: "Да", trigger: "question" },
              { value: "no", label: "Нет", trigger: "end-message" },
            ],
          },
          {
            id: "end-message",
            message: "Спасибо за ваши вопросы!",
            end: true,
          },
        ]}
      />
    </div>
  );
};

export default SimpleForm;
