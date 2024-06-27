import React from "react";
import s from "./page.module.scss";
import cm from "classnames";
import AccordionWhere from "@/components/Accordions/AccordionWhere/AccordionWhere";
import { Be_Vietnam_Pro } from "next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const page = () => {
  const date = [
    {
      id: 1,
      numbers: "01",
    },
    {
      id: 2,
      numbers: "02",
    },
    {
      id: 3,
      numbers: "03",
    },
    {
      id: 4,
      numbers: "04",
    },
  ];
  return (
    <div className={s.testPage}>
      <div
        style={{
          height: "400px",
        }}
      >
        1
      </div>
      <div className={s.Accordion}>
        <div className={s.AccordionTitel}>
          <img src="/05.png" className={s.BgSvg} />
          <div className={s.AccordionTitelBlock1}>
            <h1>
              Как зарегистрировать <br /> бизнес в <br /> Кыргызстане?
            </h1>
            <img
              src="/group123.png"
              alt="/"
              className={s.AccordionTitelBlock1Image}
            />
          </div>

          <AccordionWhere />
          <div className={s.AccordionTitel1}>
            <p>
              ПИН можно получить в любом центре обслуживания <br /> населения,
              кроме мини-цонов.
            </p>
            <div>
              <p>Важно</p>
              <h3>
                Все документы, кроме составленных на государственном или
                официальном <br /> языке Кыргызской Республики, должны
                сопровождаться нотариально <br /> засвидетельствованным
                переводом
              </h3>
            </div>
            <p>
              Развернутый перечень документов доступен на сайте :
              <a href="https://mineconom.gov.kg/ru" target="_black">
                {" "}
                https://mineconom.gov.kg/ru
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={s.AccordionSvg}>
        <div className={s.AccordionSvgTitel}>
          <span>
            <h3>
              Кто может <br /> быть ИП?
            </h3>
            <p>
              Индивидуальными предпринимателями могут быть как кыргызстанцы, так
              и иностранцы, которые постоянно или временно проживают в нашей
              стране.
            </p>
          </span>
          <div className={s.AccordionSvgTitel2}>
            <h2>Как зарегистрироваться?</h2>
            <p>Если вы решили стать ИП, то надо:</p>
            <div className={s.AccordionSvgTitel2}></div>
          </div>
          <div className={s.gridtemplatecolump}>
            <div className={s.centerText}>
              <p>заполнить заявление по форме 163;</p>
              <li>
                подтверждение регистрации по месту жительства (выдают в ЦОН).
                Можно зарегистрироваться онлайн через сервисы НС, но для этого
                нужна электронная цифровая подпись.
              </li>
            </div>
            <div className={s.raduisAll}>
              {date.map((res, i) => (
                <div key={i} className={s.bordeRaduis}>
                  <h4 className={BeVietnamPro.className}>{res.numbers}</h4>
                </div>
              ))}
              <div className={s.panHeight}></div>
            </div>
            <div className={s.mainLeft}>
              <p>-обратиться в Налоговую службу;</p>
              <p className={s.p}>предоставить копию паспорта;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
