"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion"
import cm from "classnames";
import { IoIosArrowDown } from "react-icons/io";
const manrope = Manrope({ subsets: ["latin"] });
const Haeder = () => {
  const [navProduct, setNavProduct] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuTrigger = document.querySelector(`li[onMouseEnter]`);
      const isClickInsideMenu = event.target.closest(`.${s.NavProductBlock}`) || event.target === menuTrigger;
      if (navProduct && !isClickInsideMenu) {
        setNavProduct(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navProduct]);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div>
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
            <li onMouseEnter={() => setNavProduct(true)}     >
              О проекте <IoIosArrowDown />
            </li>
            <li><Link className={s.Link} href={'/news'}>Новости</Link></li>
            <li>База знаний  <IoIosArrowDown />
              </li>
            <li><Link className={s.Link} href={'/Economy'}>История успеха</Link></li>
            <li><Link className={s.Link} href={'/digitalization'} >Справочная</Link></li>
            <li><Link className={s.Link} href={'/news'} >Enactus</Link></li>
          </ul>
        </nav>
        <div className={s.ButtonList}>
          <p>Ru</p>
          <button>Войти</button>
          <button className={s.burgerButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
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
              <li><Link className={s.Link} href={'/news'}>О проекте</Link></li>
              <li><Link className={s.Link} href={'/leadership'}>Зеленая экономика</Link></li>
              <li><Link className={s.Link} href={'/Economy'}>Цифровизация</Link></li>
              <li><Link className={s.Link} href={'/digitalization'} >Лидерство</Link></li>
              <li><Link className={s.Link} href={'/news'} >Инновация</Link></li>
            </ul>
            <ul>
              <li><Link className={s.Link} href={'/news'}>Как стать ментором</Link></li>
              <li><Link className={s.Link} href={'/leadership'}>Партнеры</Link></li>
              <li><Link className={s.Link} href={'/Economy'}>Цифровизация</Link></li>
              <li><Link className={s.Link} href={'/digitalization'} >Контакты</Link></li>
            </ul>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Haeder;


