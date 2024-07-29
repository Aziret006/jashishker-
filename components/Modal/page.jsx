// components/PersonalDataForm.js
import React, { useState } from "react";
import styles from "./page.module.scss";
import { IoIosArrowBack } from "react-icons/io";
const PersonalDataForm = ({ setData }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className={styles.modal}></div>
      <div className={styles.formWrap}>
        <div className={styles.formContainer}>
          <div className={styles.titleFlex}>
            <IoIosArrowBack size={22} onClick={() => setData(false)} />
            <h1>Личные данные</h1>
          </div>
          <IoIosArrowBack
            className={styles.backArrow}
            size={22}
            onClick={() => setData(false)}
          />

          <h2 className={styles.title}>Личные данные</h2>
          <div className={styles.photo}>
            <div className={styles.photoBorder}>
              {photo ? (
                <img className={styles.img} src={photo} alt="Uploaded" />
              ) : (
                <img src="/profile.svg" alt="Default" />
              )}
            </div>
            <h4>
              <label htmlFor="photoUpload" style={{ cursor: "pointer" }}>
                Добавить фото
              </label>
              <input
                id="photoUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
            </h4>
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
                <select style={{ width: "100%" }} className={styles.input}>
                  <option>Местоположение</option>
                </select>
              </div>
              <div className={styles.blockGrid}>
                <h4>Приложить удостоверение личности</h4>
                <input
                  type="text"
                  placeholder="Приложить документ"
                  className={styles.input}
                />
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
