"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import s from "./page.module.scss";
import { Api } from "@/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmitPOst = async (data) => {
    try {
      await axios.post(`${Api}api/v1/contact-form/`, data);
      toast.success("Сообщение успешно отправлено!");
    } catch (error) {
      console.error(error);
      toast.error("Произошла ошибка при отправке сообщения");
    }
  };

  const onSubmit = (data) => {
    handleSubmitPOst(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <ToastContainer
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnBottom={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        position="bottom-center"
        theme="dark"
      />
      <div className={s.inputFroms}>
        <p>Ваше Имя</p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.name || ""}
          {...register("name", { required: true })}
          placeholder="Введите ваше имя"
        />
        {errors.name && <span className={s.error}>Это поле обязательно</span>}
      </div>
      <div className={s.inputFroms}>
        <p>Ваше e-mail</p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.email || ""}
          {...register("email", { required: true })}
          placeholder="Введите ваш e-mail"
          type="email"
        />
        {errors.email && <span className={s.error}>Это поле обязательно</span>}
      </div>
      <div className={s.inputFroms}>
        <p>Тема</p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.subject || ""}
          {...register("subject", { required: true })}
          placeholder="Введите тему"
        />
        {errors.subject && (
          <span className={s.error}>Это поле обязательно</span>
        )}
      </div>
      <div className={s.inputFroms}>
        <p>Сообщение</p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.message || ""}
          {...register("message", { required: true })}
          placeholder="Напишите сюда"
        />
        {errors.message && (
          <span className={s.error}>Это поле обязательно</span>
        )}
      </div>
      <button className={s.button}>Отправить</button>
    </form>
  );
};

export default MainFrom;
