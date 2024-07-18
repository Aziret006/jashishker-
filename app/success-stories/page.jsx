import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.storeBack}>
        <div className={s.heroContainer}>
          <div className={s.historyAll}>
            <div className={s.stories}>
              <h1>
                Истории успеха людей,
                <br /> начавших с нуля
              </h1>
              <ul>
                <li>
                  Чтобы достичь определенных успехов, необходимо терпение,
                  мужество и напряженная работа. За спиной каждого успешного
                  человека стоит огромный опыт и своя удивительная вдохновляющая
                  история.
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
                    <Link href={"/startuperblogger"}>
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
                    <Link href={"/startuperblogger"}>
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
