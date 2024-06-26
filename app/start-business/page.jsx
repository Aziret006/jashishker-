import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import Start03 from "@/components/Start03/Start03";
import Start04 from "@/components/Start04/Start04";


const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const data = [
  {
    id: 1,
    title: "Что вы умеете делать хорошо?",
  },
  {
    id: 2,
    title: "Что вас вдохновляет?",
  },
  {
    id: 3,
    title: "Чего вам и вашим окружающим не хватает?",
  },
  {
    id: 4,
    title: "Что бы вы могли сделать лучше, чем другие делают сейчас?",
  },
  {
    id: 5,
    title: "Какой продукт или услугу вы будете предлагать?",
  },
  {
    id: 6,
    title: "Кто ваш клиент?",
  },
  {
    id: 7,
    title: "За что вам будут платить?",
  }
]
const page =  () => {

  return (
    <div>
      <Haeder />
      <div className={s.startBusiness}>
        <div className={s.heroStart}>
          <div className={s.heroContainer}>
            <div className={s.heroStartText}>
              <h1 className={BeVietnamPro.className}>С чего начать бизнес</h1>
              <h5 className={Alex.className}>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </div>
        <div className={s.startMain}>
          <div className={s.container}>
            <div className={s.startTitle}>
              <h3 className={FontManrope.className}>Как открыть свой бизнес. </h3>
              <p className={FontManrope.className}>
                <span>Данная инструкция для тех, кто начинает путь предпринимателя.  Чтобы начать свой бизнес вам нужно пройти нижеследующие шаги.</span>
              </p>
            </div>
            <div className={s.startBlock}>
              <div className={s.startBlockText}>
                <div className={s.startBlockTextTitle}>
                  <h5 className={FontManrope.className} >Любой бизнес начинается с идеи. Максимально честно ответьте сами себе на следующие вопросы:</h5>
                  <span className={FontManrope.className}>01</span>
                </div>
                <Image src="/business2.svg" alt="start" width={530} height={400} />
                <p className={FontManrope.className}>Таким образом вы сможете примерно определить свою сферу деятельности.</p>
              </div>
              <div className={s.startBlockImage}>
                <p className={FontManrope.className}>01</p>
                <ul>
                  {data.map((item) => (
                    <li key={item.id}>
                      <div className={s.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M11.5094 3.39694C11.6183 2.86378 12.3801 2.86378 12.4891 3.39694L13.3369 7.54462C13.6578 9.11469 14.8848 10.3417 16.4548 10.6626L20.6025 11.5103C21.1357 11.6193 21.1357 12.3811 20.6025 12.4901L16.4548 13.3378C14.8848 13.6588 13.6578 14.8857 13.3369 16.4558L12.4891 20.6035C12.3801 21.1367 11.6183 21.1367 11.5094 20.6035L10.6616 16.4558C10.3407 14.8857 9.11371 13.6588 7.54365 13.3378L3.39597 12.4901C2.8628 12.3811 2.8628 11.6193 3.39597 11.5103L7.54365 10.6626C9.11371 10.3417 10.3407 9.11469 10.6616 7.54462L11.5094 3.39694Z" stroke="white" stroke-width="2" />
                        </svg>
                      </div>
                      <span className={FontManrope.className}>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s.startBlock2}>
              <div className={s.startBlock2Title}>
                <h5 className={FontManrope.className} >Составьте финансовую модель, чтобы начать бизнес</h5>
                <span className={FontManrope.className}>02</span>
              </div>
              <div className={s.startBlock2Text}>
                <p className={FontManrope.className}>
                  Как ваш бизнес будет приносить доход? Финансовая модель – это учет и расчет текущих и будущих денежных потоков компании, т.е. экономика вашего предприятия.
                </p>
                <span className={FontManrope.className}>
                  Распишите для себя следующие показатели:
                </span>
              </div>
              <div className={s.startBlock2Wrap}>
                <div className={s.startBlock2Left}>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>
                        01
                      </span>
                    </div>
                    <p className={FontManrope.className}>Цена продукта: за сколько вы будете продавать продукт/услугу?</p>
                  </div>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>
                        02
                      </span>
                    </div>
                    <p className={FontManrope.className}>Спрос: какое количество товаров/услуг у вас будут покупать в месяц? </p>
                  </div>
                </div>
                <div className={s.startBlock2Left}>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>
                        03
                      </span>
                    </div>
                    <p className={FontManrope.className}>Затраты на производство: сколько вы будете тратить на создание одного продукта/услуги? </p>
                  </div>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>
                        04
                      </span>
                    </div>
                    <p className={FontManrope.className}>Постоянные затраты: какие платежи вам нужно будет вносить постоянно, вне зависимости от объемов продаж (например, оплата аренды)?</p>
                  </div>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>
                        05
                      </span>
                    </div>
                    <p className={FontManrope.className}>Это основа для вашего будущего бизнес-плана.</p>
                  </div>
                </div>
              </div>
            </div>
            <Start03 />
            <Start04 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;