import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import { Manrope } from 'next/font/google';
const manrope = Manrope({ subsets: ["latin"] });
const Haeder = () => {
    return (
        <haeder className={`${manrope.className}  ${ s.haeder}`} >
            <div className={s.logo}>
                <Image src="/logo.svg" alt="logo" width={50} height={50} />
                <p>ЖАШ <br />ИШКЕР</p>
            </div>

            <nav className={s.nav}>
                <ul>
                    <li>О проекте</li>
                    <li>Новости</li>
                    <li>База знаний</li>
                    <li>История успеха</li>
                    <li>Справочная Enactus</li>
                </ul>
            </nav>
            <div className={s.ButtonList}>
             <p>Ru</p>
             <button>Войти</button>
            </div>
        </haeder>
    )
}

export default Haeder
