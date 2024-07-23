"use client";

import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import cm from "classnames";
import { motion } from "framer-motion";
const manrope = Manrope({ subsets: ["latin"] });
const Footer = () => {
  const [pageIndexNav, setPageIndexNav] = useState(null);
  const handlerNavPage = (e) => {
    setPageIndexNav(e == pageIndexNav ? null : e);
  };
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <footer className={s.footer}>
      <div className={s.NavLink}>
        <div className={s.LoogFooter}>
          <Link href="/" className={s.logo}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <p>
              ЖАШ <br />
              ИШКЕР
            </p>
          </Link>
          <p>
            Энактас Кыргызстан при финансовой поддержке Европейского  Союза в
            Кыргызской Республике с декабря 2022 года начал реализацию проекта
            «Молодежь за цифровизацию, лидерство и зеленые навыки».
          </p>
          <img src="/Logo.png" alt="vk" className={s.LogoCopyn} />
        </div>
        <div className={s.NavFooter}>
          <ul>
            <li>
              <p>Страницы</p>
            </li>
            <li onClick={() => handlerNavPage(1)}>
              О проекте <IoIosArrowDown />
              {pageIndexNav == 1 && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  className={s.accMenu}
                >
                  <li>
                    <Link className={s.Link} href={"/about"}>
                      О проекте
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/economy"}>
                      Зеленая экономика
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/digitalization"}>
                      Цифровизация
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/leadership"}>
                      Лидерство
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/innovation"}>
                      Инновация
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/news"}>
                      Как стать ментором
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/parther"}>
                      Партнеры
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/digitalization"}>
                      Цифровизация
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/contact"}>
                      Контакты
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>
            <li>Новости</li>
            <li onClick={() => handlerNavPage(2)}>
              База знаний <IoIosArrowDown />
              {pageIndexNav == 2 && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  className={s.accMenu}
                >
                  <li>
                    <Link className={s.Link} href={"/start-business"}>
                      С чего начать бизнес
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/business"}>
                      Как составить бизнес-план
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/economy"}>
                      Шаблоны бизнес-планов
                    </Link>
                  </li>
                  <li>
                    <Link className={s.Link} href={"/digitalization"}>
                      Оценка проекта
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>
            <li>История успеха</li>
            <li>
              <a
                className={s.Link}
                href="https://enactus.kg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enactus
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <p>Адрес</p>
              <a
                href="https://www.google.com/maps/place/103+%D1%83%D0%BB.+%D0%98%D0%B1%D1%80%D0%B0%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8858381,74.616615,17z/data=!3m1!4b1!4m6!3m5!1s0x389eb7ecaaab58b5:0x44b73c5956bfe30e!8m2!3d42.8858381!4d74.616615!16s%2Fg%2F11ts_w3sy_?entry=ttu"
                target="_blank"
              >
                Кыргызская Республика Бишкек, <br /> 720001 ул.Ибраимова, 103
              </a>
            </li>
            <li>
              <p>Номер телефона</p>
              <a href="tel:+996555973001" target="_blank">
                +996 (555) 973 - 001
              </a>
            </li>
            <li>
              <p>E-Mail</p>
              <a href="mailto:enactuskyrgyzstan@gmail.com" target="_blank">
                enactuskyrgyzstan@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={s.endP}>
        Copyright © 2024 Jash Ishker All rights Recerved.
      </p>
    </footer>
  );
};

export default Footer;
