"use client";
import React from "react";
import { useForm } from "react-hook-form";
import s from "./page.module.scss";
import TrText from "@/components/TrText/TrText";
const MainFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.inputFroms}>
        <p>
          <TrText root={"home"} name={"section_support_form_label_name"} />
        </p>
        <input
          className={s.inputFrom}
          {...register("firstName", { required: true })}
          placeholder={TrText({
            root: "home",
            name: "section_support_form_placeholder_name",
          })}
        />
      </div>

      <div className={s.inputFroms}>
        <p>
          <TrText root={"home"} name={"section_support_form_label_email"} />
        </p>
        <input
          className={s.inputFrom}
          {...register("lastName", { required: true })}
          placeholder={TrText({
            root: "home",
            name: "section_support_form_placeholder_email",
          })}
        />
      </div>

      <div className={s.inputFroms}>
        <p>
          <TrText root={"home"} name={"section_5_form_label_theme"} />
        </p>
        <input
          className={s.inputFrom}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder={TrText({
            root: "home",
            name: "section_5_form_placeholder_theme",
          })}
        />
      </div>

      <div className={s.inputFroms}>
        <p>
          <TrText root={"home"} name={"section_support_form_label_message"} />
        </p>
        <input
          className={s.inputFrom}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder={TrText({
            root: "home",
            name: "section_5_form_placeholder_message",
          })}
        />
      </div>

      <button className={s.button}>
        <TrText root={"home"} name={"section_5_form_button"} />
      </button>
    </form>
  );
};

export default MainFrom;
