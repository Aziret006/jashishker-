'use client'
import React, { useState } from 'react'
import s from './page.module.scss'
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import { Collapse } from "react-collapse";

import Image from 'next/image';

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"], // specify the desired weight here
});


const data = [
  {
    id: 1,
    title: "Цифровой этикет",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },
  {
    id: 2,
    title: "Информационная безопасность ",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },
  {
    id: 3,
    title: "Визуализация и анализ данных",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },
  {
    id: 4,
    title: "Цифровые навыки в проектной работе",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },

  {
    id: 5,
    title: "Цифровые навыки в маркетинге",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },
  {
    id: 6,
    title: "Разработка программного обеспечения",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },
  {
    id: 7,
    title: "Группа навыков в области искусственного интеллекта и машинного обучения",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  },
  {
    id: 8,
    title: "Баланс навыков",
    discription: "Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них."
  }

]

export default function Accordion() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };
  return (
    <div className={s.accordion}>
      <div className={s.container}>
        <div className={s.accordionContent}>
          <div className={s.accordionTitle}>
            <h5 className={FontManrope.className}>Примеры востребованных цифровых навыков</h5>
            <div className={s.accordionText}>
              <p className={FontManrope.className}>Ниже представлены компетенции, которые помогут получить конкурентное преимущество в сфере digital.</p>
            </div>
          </div>
          <div className={s.accordionWrap}>
            {data.map((item, index) => {
              return (
                <div className={s.accordionCard} key={index}>
                  <div className={s.accordionBlock}>
                    <div onClick={() => toggleAccordion(item.id)}
                      className={s.accordionCardTitle}>
                      <p className={FontManrope.className}>{item.title}</p>
                      {openItemId === item.id ?
                        <FiArrowUpRight /> :
                        <FiArrowDownRight />
                      }
                    </div>
                    <Collapse isOpened={openItemId === item.id}>
                      <div className={s.accordionCardText}>
                        <Image src="/Vector.svg" alt="image" width={394} height={207.193} />
                        <div className={s.accordionCardTextBlock}>
                          <p className={FontManrope.className}>Этот навык является базовым и необходим в онлайн-работе. Он помогает повышать эффективность переговоров с коллегами, партнёрами и клиентами. Цифровой этикет учит обращать внимание на типы коммуникаций и тон общения в каждом из них.</p>
                          <p>Например, важно заранее обсудить с партнёрами, в каком мессенджере лучше общаться, можно ли писать в выходные, удобно ли использовать голосовые сообщения. При видеозвонках важно обращать внимание на жесты и мимику собеседника. Этот навык поможет понять настроение клиента, его отношение к разговору и направить общение в нужное русло.</p>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div >
  )
}
