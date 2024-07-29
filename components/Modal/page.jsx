// components/PersonalDataForm.js
import React from "react";
import styles from "./page.module.scss";

const PersonalDataForm = ({ setData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно обработать отправку формы
    setData(false);
  };

  return (
    <>
      <div onClick={() => setData(false)} className={styles.modal}></div>
      <div className={styles.formWrap}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Личные данные</h2>
          <div className={styles.photoSection}>
            <div className={styles.photoPlaceholder}></div>
            <button className={styles.photoButton}>Добавить фото</button>
          </div>
          <form className={styles.form}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Введите ФИО"
                className={styles.input}
              />
              <input type="date" className={styles.input} />
            </div>
            <div className={styles.row}>
              <input
                type="tel"
                placeholder="Введите номер телефона"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <select className={styles.input}>
                <option>Местоположение</option>
              </select>
              <input type="file" className={styles.input} />
            </div>
            <div className={styles.row}>
              <input type="text" placeholder="ИП" className={styles.input} />
              <input
                type="text"
                placeholder="Вид деятельности"
                className={styles.input}
              />
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
