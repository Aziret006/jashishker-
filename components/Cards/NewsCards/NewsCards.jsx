import Image from 'next/image'
import React from 'react'
import { FiShare2 } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import s from './page.module.scss'
const NewsCards = ({ data }) => {
  return (
    <div className={s.NewsCards}>
      <div className={s.NewsCardsImage}>
        <Image src={data.image} alt="image" objectFit='cover' fill />
      </div>
      <div className={s.NewsCardsTitel}>
        <span className={s.NewsCardsTitelBlock1}>
          <button>
            {data.title}
          </button>
          <FiShare2 />
        </span>
        <p className={s.NewsCardsTitelBlock2}>{data.text}</p>
        <span className={s.NewsCardsTitelBlock3}>
          <span className={s.NewsCardsTime}>
            <p>{data.views}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#222222" />
            </svg>
            <p style={{opacity: 0.7}}>{data.endDate}</p>
          </span>
          <button><GoArrowUpRight /></button>
        </span>
      </div>

    </div>
  )
}

export default NewsCards


