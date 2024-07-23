import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
const Menu = ({ isMenu, setMenu }) => {
  const [navPage, setPage] = useState(false);
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

  const handlerPageIndex = (e) => {
    setPage(e === navPage ? false : e);
  };
  return (
    isMenu && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className={s.menu}
      >
        <button className={s.Call} onClick={() => setMenu(false)}>
          <BiX />
        </button>
        <ul className={s.menuNav}>
          <li onClick={() => handlerPageIndex(1)}>
            О проекте <IoIosArrowDown />
            {navPage == 1 && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
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
          <li>
            <Link className={s.Link} href={"/news"}>
              Новости
            </Link>
          </li>
          <li onClick={() => handlerPageIndex(2)}>
            База знаний <IoIosArrowDown />
            {navPage == 2 && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
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
          <li>
            <Link className={s.Link} href={"/economy"}>
              История успеха
            </Link>
          </li>
          <li>
            <Link className={s.Link} href={"/digitalization"}>
              Справочная
            </Link>
          </li>
          <li></li>
        </ul>
      </motion.div>
    )
  );
};

export default Menu;
