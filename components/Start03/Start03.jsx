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


export default function Start03() {
  return (
    <div className={s.start03}>
      <div className={s.start03Title}>
        <h4 className={FontManrope.className}>
          Найдите источники финансирования
        </h4>
        <div className={s.start03Text}>
          <span className={FontManrope.className}>03</span>
          <p className={FontManrope.className}>После подготовки бизнес-плана вы поймете, сколько денег вам необходимо для открытия бизнеса. Какой-то единой для всех минимальной суммы не существует, это всегда индивидуально, зависит от отрасли и множества других факторов. Если для запуска вам не требуется сырье и инструменты, то начинать можно буквально с нуля. Если же нужны хотя бы минимальные вложения, то заранее подумайте о том, где найти деньги для старта.</p>
        </div>
      </div>
      <h5>Некоторые примеры для действия:</h5>
      <div className={s.start03Img}>
        <div className={s.ellipse1}>
          <span className={FontManrope.className}>
            Заключить контракт и получить определенную сумму на развитие бизнеса.
          </span>
        </div>
        <div className={s.ellipse2}>
          <span className={FontManrope.className}>
            Принять участие в программе грантовой поддержки от донорских организаций.
          </span>
        </div>

        <div className={s.ellipse3}>
          <span className={FontManrope.className}>
            Воспользоваться льготным микрозаймом по сниженной процентной ставке в финансовых учреждениях.
          </span>
        </div>

        <div className={s.ellipse4}>
          <span className={FontManrope.className}>
            Взять льготный банковский кредит для открытия бизнеса.
          </span>
        </div>
        <div className={s.ellipse5}>
          <span className={FontManrope.className}>
            Получить грант от Энактус в рамках поддержки молодежного предпринимательства.
          </span>
        </div>
      </div>
      <div className={s.start03Text2}>
        <h3>Если ни один из этих пунктов вам не подходит, то подумайте, кто может стать вашим партнером по бизнесу и внести свой вклад в открытие вашего дела.</h3>
      </div>
      
    </div>
  )
}
