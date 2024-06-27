import React from 'react'
import s from './page.module.scss'
import { Alex_Brush, Be_Vietnam_Pro, Manrope, Mansalva } from "next/font/google";
import Image from 'next/image';

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const FontMansalva = Mansalva({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Start05() {
  return (
    <div className={s.start05}>
      <div className={s.start05Content}>
        <div className={s.start05ContentTitle}>
          <span className={FontManrope.className}>05</span>
          <h2 className={FontManrope.className}>Определитесь с местом ведения бизнеса</h2>
        </div>
        <p className={FontManrope.className}>Тут все зависит от масштабов вашего проекта и от того, чем вы планируете заниматься. Дешевле всего начинать с работы из дома, но этот вариант применим не ко всем видам деятельности.</p>
      </div>
      <Image className={s.desktop} src="./starto5.svg" alt="" width={1260} height={909} />
      <Image className={s.mobile} src="./start05.svg" alt="" width={417} height={561} />      
    </div>
  )
}
