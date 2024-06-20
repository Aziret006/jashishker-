import React from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
const manrope = Manrope({ subsets: ["latin"] });
const Haeder = () => {
  return (
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
          <li><Link href={'/'} >О проекте</Link> </li>
          <li>Новости</li>
          <li>База знаний</li>
          <li>История успеха</li>
          <li>Справочная Enactus</li>
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
  );
};

export default Haeder;


