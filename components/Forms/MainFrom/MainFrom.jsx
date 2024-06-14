"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import s from './page.module.scss'
const MainFrom = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.inputFroms}>
                <p>Ваше Имя</p>
                <input className={s.inputFrom} {...register("firstName", { required: true })} placeholder='Введите ваше имя' />
            </div>

            <div className={s.inputFroms}>
                <p>Ваше e-mail</p>
                <input className={s.inputFrom} {...register("lastName", { required: true })} placeholder='Введите ваш e-mail' />
            </div>

            <div className={s.inputFroms}>
                <p>Тема</p>
                <input className={s.inputFrom} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder='Введите тему' />
            </div>

            <div className={s.inputFroms}>
                <p>Сообщение</p>
                <input className={s.inputFrom} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder='Напишите сюда' />
            </div>
        </form>
    )
}

export default MainFrom
