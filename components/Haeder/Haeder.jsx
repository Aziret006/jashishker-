"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import cm from "classnames";
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


  return (
    <div>
      <haeder className={`${manrope.className}  ${s.haeder}`}>
        <div className={s.logo}>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <p>
            ЖАШ <br />
            ИШКЕР
          </p>
        </div>
        <nav className={s.nav}>
          <ul>
            <li
              onMouseEnter={() => setNavProduct(true)}
            >
              О проекте
              V
            </li>
            <li><Link className={s.Link} href={'/news'}>Новости</Link></li>
            <li><Link className={s.Link} href={'/leadership'}>База знаний</Link></li>
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
        <div
          className={cm(s.NavProductBlock, {
            [s.NavProductBlockVisible]: navProduct === f,
          })}
          data-visible={navProduct}
        >
          <ul className={s.NavProduct}>
            <li><Link className={s.Link} href={'/news'}>Новости</Link></li>
            <li><Link className={s.Link} href={'/leadership'}>База знаний</Link></li>
            <li><Link className={s.Link} href={'/Economy'}>История успеха</Link></li>
            <li><Link className={s.Link} href={'/digitalization'} >Справочная</Link></li>
            <li><Link className={s.Link} href={'/news'} >Enactus</Link></li>

          </ul>
        </div>
      )}

    </div>
  );
};

export default Haeder;


