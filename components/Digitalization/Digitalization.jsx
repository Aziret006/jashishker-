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
          <div className={s.digitalizationImg}>
            <Image src="/digitalization1.svg" width={1200} height={900} alt="" />
          </div>
        </div>
        <div className={s.digitalizationContent}>
          <div className={s.digitalizationWrapper}>
            <div className={s.digitalizationLeft}>
              <h2 className={FontMansalva.className}>[Базовые <br /> навыки]</h2>
            </div>
            <div className={s.digitalizationRight}>
              <p className={FontManrope.className}>К таким навыкам можно отнести:</p>
              <ul className={FontManrope.className}>
                <li>умение пользоваться электронной почтой, интернетом и социальными сетями;</li>
                <li>коммуницировать через мессенджеры;</li>
                <li>редактировать и обрабатывать тексты;</li>
                <li>защищать информацию;</li>
                <li>умение печатать на клавиатуре и работать с сенсорными экранами.</li>
              </ul>
              <p className={FontManrope.className}>Эти навыки напрямую связаны с функциональной и цифровой грамотностью в использовании интернета, приложений и электронных устройств. Базовые цифровые компетенции помогают человеку эффективно общаться и реализовываться в учёбе и работе.</p>
            </div>
          </div>
          <div className={s.digitalizationWrapper}>
            <div className={s.digitalizationRight}>
              <p className={FontManrope.className}>В эту группу навыков входит:</p>
              <ul className={FontManrope.className}>
                <li>умение работать с Excel, 1С и другими специализированными программами;</li>
                <li>владение популярными языками программирования, например Python и SQL;</li>
                <li>знание инструментов цифрового маркетинга.</li>
              </ul>
              <p className={FontManrope.className}>Эти профессиональные цифровые навыки помогают специалисту решать ежедневные сложные задачи в бизнес-среде. Они необходимы для того, чтобы иметь конкурентное преимущество, эффективно использовать цифровые инструменты для работы и личностного развития.</p>
            </div>
            <div className={s.digitalizationLeft}>
              <h2 className={FontMansalva.className}>[Средние <br /> навыки]</h2>
            </div>
          </div>
          <div className={s.digitalizationWrapper}>
            <div className={s.digitalizationLeft}>
              <h2 className={FontMansalva.className}>[Продвинутые <br /> навыки]</h2>
            </div>
            <div className={s.digitalizationRight}>
              <p className={FontManrope.className}>К таким навыкам можно отнести:</p>
              <ul className={FontManrope.className}>
                <li>умение использовать возможности искусственного интеллекта;</li>
                <li>анализ больших объёмов данных;</li>                <li>знание инструментов кибербезопасности;</li>
                <li>разработка программного обеспечения;</li>
                <li>знание основ машинного обучения.</li>

              </ul>
              <p className={FontManrope.className}>Согласно опросу, проведённому британским Институтом обучения и работы (источник), работодатели заинтересованы в кандидатах, которые обладают продвинутыми цифровыми навыками. Дефицит таких кадров сдерживает инновации, производительность и рост бизнеса.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
