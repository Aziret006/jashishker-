"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import s from './page.module.scss'
import { Manrope } from 'next/font/google'
const FontManrope = Manrope({
    subsets: ["latin"],
    weight: ["600", "400"], // specify the desired weight here
});

const AccordionWhere = () => {

    const data = [
        {
            title: "Пин для физических лиц",
            id: 1,
            text: {
                title: "Паспорт",
                title1: "Если у вас есть виза цифрового кочевника,ПИН вам уже присвоен"
            }
        },
        {
            title: "Пин для юридических лиц",
            id: 2,
            text: {
                title: "Паспорт",
                title1: "Если у вас есть виза цифрового кочевника,ПИН вам уже присвоен"
            }
        },
        {
            title: "Регистрация в налоговых органах",
            id: 3,
            text: {
                title: "Паспорт",
                title1: "Если у вас есть виза цифрового кочевника,ПИН вам уже присвоен"
            }
        },
        {
            title: "Регистрация ОсОО",
            id: 4,
            text: {
                title: "Паспорт",
                title1: "Если у вас есть виза цифрового кочевника,ПИН вам уже присвоен"
            }
        },
        {
            title: "Регистрация ИП",
            id: 5,
            text: {
                title: "Паспорт",
                title1: "Если у вас есть виза цифрового кочевника,ПИН вам уже присвоен"
            }
        },
    ]
    const [pageIndex, setPageIndex] = useState(null)
    const handlerPageIndex = (e) => {
        setPageIndex(e == pageIndex ? null : e)
    }


    return (
        <div className={s.accordionWrap}>
            {data.map((item, index) => {
                return (
                    <div className={s.accordionCard} key={index}>
                        <div onClick={() => handlerPageIndex(item.id)}
                            className={s.accordionCardTitle}>
                            <p className={FontManrope.className}>{item.title}</p>
                            {pageIndex === item.id ?
                                <FiArrowUpRight /> :
                                <FiArrowDownRight />
                            }
                        </div>
                        <Collapse isOpened={pageIndex === item.id}>
                            <div className={s.accordionCardText}>
                                <ul className={s.accordionCardTextBlock}>
                                    <li>
                                        {item.text.title}
                                    </li>
                                    <li>
                                        {item.text.title1}
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </div>
                )
            })}
        </div>
    )
}

export default AccordionWhere
