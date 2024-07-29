// components/PersonalDataForm.js
import React from "react";
import styles from "./page.module.scss";
import { IoIosArrowBack } from "react-icons/io";
const PersonalDataForm = ({ setData }) => {
  return (
    <>
      <div onClick={() => setData(false)} className={styles.modal}></div>
      <div className={styles.formWrap}>
        <div className={styles.formContainer}>
          <div>
            <h1>Личные данные</h1>
          </div>
          <h2 className={styles.title}>Личные данные</h2>
          <div className={styles.photoSection}>
            <div className={styles.photoPlaceholder}></div>
            <button className={styles.photoButton}>Добавить фото</button>
          </div>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>ФИО</h4>
                <input
                  type="text"
                  placeholder="Введите ФИО"
                  className={styles.input}
                />
              </div>
              <div className={styles.blockGrid}>
                <h4>DD/MM/YY</h4>
                <input type="date" className={styles.input} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>Номер телефона</h4>
                <input
                  type="tel"
                  placeholder="Введите номер телефона"
                  className={styles.input}
                />
              </div>
              <div className={styles.blockGrid}>
                <h4>E-Mail</h4>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>Регион</h4>
                <select className={styles.input}>
                  <option>Местоположение</option>
                </select>
              </div>
              <div className={styles.blockGrid}>
                <h4>Приложить удостоверение личности</h4>
                <input type="file" className={styles.input} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>ИП</h4>
                <input
                  type="text"
                  placeholder="Вид деятельности"
                  className={styles.input}
                />
              </div>
              <div className={styles.blockGrid}>
                <h4>Вид деятельности</h4>
                <input
                  type="text"
                  placeholder="Вид деятельности"
                  className={styles.input}
                />
              </div>
            </div>
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalDataForm;
