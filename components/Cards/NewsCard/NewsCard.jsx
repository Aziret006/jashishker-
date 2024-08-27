import React from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { FiShare2 } from "react-icons/fi";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
const NewsCard = ({ data }) => {
  return (
    <div className={s.NewsCards}>
      <SocialSidebar />
      <div className={s.NewsCardsImage}>
        <Link href={`/news/${data.id}`}>
          <Image
            src={data.images[0].image}
            placeholder="blur"
            blurDataURL={data.images[0].image}
            alt="image"
            objectFit="cover"
            fill
          />
        </Link>
        A
      </div>
      <div className={s.NewsCardsTitel}>
        <span className={s.NewsCardsTitelBlock1}>
          <button>{data.status}</button>
          <FiShare2 />
        </span>
        <p className={s.NewsCardsTitelBlock2}>{data.title}</p>
        <span className={s.NewsCardsTitelBlock3}>
          <span className={s.NewsCardsTime}>
            <p>{data.views} views</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#222222" />
            </svg>
            <p style={{ opacity: 0.7 }}>{data.time_since_created}</p>
          </span>
          <Link href={`/news/${data.id}`}>
            {" "}
            <button>
              <GoArrowUpRight />
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
