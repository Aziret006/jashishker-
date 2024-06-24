import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import { motion } from 'framer-motion'
import { BiX } from 'react-icons/bi';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
const Menu = ({ isMenu, setMenu }) => {

    const [navPage, setPage] = useState(false);
    const menuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeInOut" } },
    };


    useEffect(() => {
        if (isMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenu])
    const handlerPageIndex = (e) => {
        setPage(e === navPage ? false : e);
    }
    return isMenu && (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className={s.menu}>

            <button className={s.Call} onClick={() => setMenu(false)} >
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
                            <li><Link className={s.Link} href={'/news'}>О проекте</Link></li>
                            <li><Link className={s.Link} href={'/leadership'}>Зеленая экономика</Link></li>
                            <li><Link className={s.Link} href={'/Economy'}>Цифровизация</Link></li>
                            <li><Link className={s.Link} href={'/digitalization'} >Лидерство</Link></li>
                            <li><Link className={s.Link} href={'/news'} >Инновация</Link></li>

                            <li><Link className={s.Link} href={'/news'}>Как стать ментором</Link></li>
                            <li><Link className={s.Link} href={'/leadership'}>Партнеры</Link></li>
                            <li><Link className={s.Link} href={'/Economy'}>Цифровизация</Link></li>
                            <li><Link className={s.Link} href={'/digitalization'} >Контакты</Link></li>
                        </motion.ul>
                    )}
                </li>
                <li><Link className={s.Link} href={'/news'}>Новости</Link></li>
                <li onClick={() => handlerPageIndex(2)} >База знаний  <IoIosArrowDown />
                    {navPage == 2 && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                        >
                            <li><Link className={s.Link} href={'/news'}>С чего начать бизнес</Link></li>
                            <li><Link className={s.Link} href={'/leadership'}>Как составить бизнес-план</Link></li>
                            <li><Link className={s.Link} href={'/Economy'}>Шаблоны бизнес-планов</Link></li>
                            <li><Link className={s.Link} href={'/digitalization'} >Оценка проекта</Link></li>
                        </motion.ul>
                    )}

                </li>
                <li><Link className={s.Link} href={'/Economy'}>История успеха</Link></li>
                <li><Link className={s.Link} href={'/digitalization'} >Справочная</Link></li>
                <li><Link className={s.Link} href={'/news'} >Enactus</Link></li>

            </ul>

        </motion.div>
    )
}

export default Menu
