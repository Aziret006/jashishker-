"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import cm from "classnames";
import { IoIosArrowDown } from "react-icons/io";
import Menu from "./Menu/Menu";
import LocalSwitcher from "../LocalSwitcher/LocalSwitcher";
const manrope = Manrope({ subsets: ["latin"] });
const Haeder = () => {
  const [navProduct, setNavProduct] = useState(false);
  const [navKnowledge, setNavKnowledge] = useState(false);
  const previousActiveMenuRef = useRef(null);

  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuTriggerProduct = document.querySelector(`li[onMouseEnter]`);
      const menuTriggerKnowledge = document.querySelector(
        `li[data-knowledge-dropdown]`
      );
      const isClickInsideProductMenu =
        event.target.closest(`.${s.NavProductBlock}`) ||
        event.target === menuTriggerProduct;
      const isClickInsideKnowledgeMenu =
        event.target.closest(`.${s.NavKnowledgeBlock}`) ||
        event.target === menuTriggerKnowledge;
      console.log(
        isClickInsideProductMenu,
        isClickInsideKnowledgeMenu,
        previousActiveMenuRef.current,
        "test1"
      );
      if (navProduct && !isClickInsideProductMenu) {
        setNavProduct(false);
      }
      if (navKnowledge && !isClickInsideKnowledgeMenu) {
        setNavKnowledge(false);
      }

      if (isClickInsideProductMenu) {
        if (previousActiveMenuRef.current != "project") {
          setNavKnowledge(false);
        }
        setNavProduct(true);
      } else if (isClickInsideKnowledgeMenu) {
        if (previousActiveMenuRef.current != "knowledgeBase") {
          setNavProduct(false);
        }
        setNavKnowledge(true);
      }
      previousActiveMenuRef.current = navProduct
        ? "project"
        : navKnowledge
        ? "knowledgeBase"
        : null;
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navProduct, navKnowledge]);
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
    <div className={s.Div}>
      <haeder className={`${manrope.className}  ${s.haeder}`}>
        <a href="/" className={s.logo}>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <p>
            ЖАШ <br />
            ИШКЕР
          </p>
        </a>
        <nav className={s.nav}>
          <ul>
            <li onClick={() => setNavProduct(true)}>
              О проекте <IoIosArrowDown />
            </li>
            <li>
              <Link className={s.Link} href={"/news"}>
                Новости
              </Link>
            </li>
            <li onClick={() => setNavKnowledge(true)}>
              База знаний <IoIosArrowDown />
            </li>
            <li>
              <Link className={s.Link} href={"/success-stories"}>
                История успеха
              </Link>
            </li>
            <li>
              <Link className={s.Link} href={"/database"}>
                База данных
              </Link>
            </li>
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
            <li>
              <Link className={s.Link} href={"/contact"}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.ButtonList}>
          <LocalSwitcher />
          <button className="Login">Войти</button>
          <button className={s.burgerButton} onClick={() => setIsMenu(!isMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </haeder>
      {navProduct && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cm(s.NavProductBlock, {
            [s.NavProductBlockVisible]: navProduct === false,
          })}
          data-visible={navProduct}
        >
          <div className={s.NavProduct}>
            <ul>
              <li>
                <Link className={s.Link} href={"/about"}>
                  О проекте
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/Economy"}>
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
            </ul>
            <ul>
              <li>
                <Link className={s.Link} href={"/partner"}>
                  Партнеры
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className={s.Link} href={"/contact"}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
      {navKnowledge && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cm(s.NavKnowledgeBlock, {
            [s.NavKnowledgeBlockVisible]: navKnowledge === false,
          })}
          data-visible={navKnowledge}
        >
          <div className={s.NavProduct}>
            <ul>
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
                <Link className={s.Link} href={"/Economy"}>
                  Шаблоны бизнес-планов
                </Link>
              </li>

              <li>
                <Link className={s.Link} href={"/digitalization"}>
                  Оценка проекта
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/database"}>
                  База данных
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}

      {isMenu && <Menu setMenu={setIsMenu} isMenu={isMenu} />}
    </div>
  );
};

export default Haeder;
// <li>
//   <Link className={s.Link} href={"/news"}>
//     Как стать ментором
//   </Link>
// </li>
