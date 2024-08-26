import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import SetHtml from "@/components/TrText/SetHtml";
import TrText from "@/components/TrText/TrText";

const Text = ({ name }) => {
  return <TrText root={"other"} name={name} />;
};

const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.storeBack}>
        <SocialSidebar />
        <div className={s.heroContainer}>
          <div className={s.historyAll}>
            <div className={s.stories}>
              <h1>
                <SetHtml root={"other"} name={"A6"} />
              </h1>
              <ul>
                <li>
                  <Text name={"A7"} />
                </li>
              </ul>
            </div>
            <hr />
            <div className={s.gridColump}>
              <div className={s.cardsBlocks}>
                <img className={s.podrobneye} src="/image24.svg" alt="" />
                <div className={s.button}>
                  <Link href={"/startuperblogger"}>
                    <button>Подробнее</button>
                  </Link>
                </div>
                <div className={s.backContext}>
                  <h2>Абдукадыр Абдушукуров</h2>
                  <p>Стартапер и блогер</p>
                </div>
              </div>
              <div className={s.cardsBlocks}>
                <img className={s.podrobneye} src="/image25.svg" alt="" />
                <div className={s.button}>
                  <Link href={"/aynazik-experience"}>
                    <button>Подробнее</button>
                  </Link>
                </div>
                <div className={s.backContext}>
                  <h2>Айназик Торогулова</h2>
                  <p>Стартапер и блогер</p>
                </div>
              </div>
              <div className={s.cardsBlocks}>
                <img className={s.podrobneye} src="/image26.svg" alt="" />
                <div className={s.button}>
                  <Link href={"/ruralbiogas"}>
                    <button>Подробнее</button>
                  </Link>
                </div>
                <div className={s.backContext}>
                  <h2>Бекжан Иманкулов</h2>
                  <p>Стартапер и блогер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
