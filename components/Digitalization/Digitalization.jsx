import React from 'react'
import s from './page.module.scss'
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"], // specify the desired weight here
});
export default function Digitalization() {
  return (
    <div className={s.digitalization}>
      <div className={s.container}>
        <div className={s.digitalizationTitle}>
          <h5 className={FontManrope.className}>
            Какие цифровые навыки бывают?
          </h5>
          <p className={FontManrope.className}>
            Выделим три ключевые группы навыков:
          </p>
        </div>
        <div className={s.digitalizationContent}>
          <div className={s.digitalizationContentBlock}>
            <div className={s.digitalizationBorder} />
            <div className={s.digitalizationText}>
              <div className={s.digitalizationNomer}>
                <span className={FontManrope.className}>01</span>
              </div>
              <p className={FontManrope.className}>
                Базовые навыки
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
