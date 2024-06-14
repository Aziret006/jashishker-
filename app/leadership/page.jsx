import React from "react";
import s from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import {
  Alex_Brush,
  Be_Vietnam_Pro,
  Bebas_Neue,
  Inter,
  Manrope,
} from "next/font/google";
import Haeder from "@/components/Haeder/Haeder";
import Image from "next/image";
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"], // specify the desired weight here
});
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });

const manrope = Manrope({ subsets: ["latin"] });

const page = () => {
  return (
    <div className={`${manrope.tet} ${s.tet}`}>
      <Haeder />
      <div className={s.leadership}>
        <div className={s.leadershipTitel}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>Лидерство</h1>
            <div className={Alex.className}>Lorem ipsum dolor sit amet</div>
          </div>
          <hr />
          <div className={s.leadershipText}>
            <h2>
              Если взглянуть на все великолепие животного и растительного мира,
              то становится понятно, что лидерство положено в саму основу жизни.
            </h2>
            <div className={s.context}>
              <p>
                Только у растений и животных оно проявляется в виде простого
                доминирования. Но это не мешает отражать главную суть этого
                явления преимущество одной или группы особей над другими.
              </p>
              <p style={{ marginTop: "0" }}>
                В процессе формирования зачатков межличностных отношений вида
                Ноmо Sapiens простое доминирование, присущее всему животному
                миру трансформировалось,{" "}
              </p>
            </div>
          </div>
          <div className={s.contextEnd}>
            <p>
              развивалось, и в конечном итоге в человеке, как в высшей форме
              психоэмоциональной жизни преобразовалось в явление лидерства..
            </p>
          </div>
          <div className={s.img}>
            <Image
              src={"/leadership.svg"}
              alt="leadership"
              fill
              objectFit="cover"
            />
          </div>
          <div className={s.getextall}>
            <div className={s.getextEnd}>
              <p>
                Существует несколько значений термина лидерство. Но остановимся
                на том, лидерство это особое качество, модель поведения человека
                или организации, которое обеспечивает передовые позиции.
                Развитие лидерских качеств происходит только в социуме и при
                постоянном межличностном взаимодействии дома, на работе и т.д.
                Люди, стремящиеся к лидерству, стараются найти способы,
                позволяющие им максимально быстро добиться успеха и запять
                лидерские позиции. Люди, идущие за лидером, хотят понять не
                только, что заставляет их подчиняться его власти, но и как они
                сами могут влиять на его действия. При этом любой человек
                оказывается так или иначе вовлечен в отношения «лидер —
                последователи» во всех сферах своей жизни: в профессиональной
                деятельности, семье, дружбе, саморазвитии.{" "}
              </p>
            </div>
            <div className={s.getextEnd1}>
              <p>
                Включаясь в политические, экономические, культурные процессы,
                человек непременно сталкивается с проблемами лидерства.
                Исследования лидерства сохраняют свою актуальность и потому, что
                изменения, которые происходят в обществе на всех уровнях
              </p>
            </div>
            <h4 className={s.h4}>Например</h4>
            {[1, 2, 3].map((_, i) => {
              return (
                <div key={i} className={s.getextEndall}>
                  <div className={s.getborder}>
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </div>
                  <p>
                    <span>На технологическом уровне</span> - разработка новых
                    компьютерных устройств и развитие интернет-пространства;
                  </p>
                </div>
              );
            })}
            <h5 className={s.h5}>
              не затрагивая основ лидерства, вызывают необходимость поиска иных
              форм его проявления, новых способов его развития.
            </h5>
          </div>
          <div className={s.getfoottext}>
            <h4>
              Но мы всегда должны задаваться вопросом зачем нам это будет нужно?
            </h4>
            <p>
              Мнения людей всегда будут расходиться, но в одном они всегда будут
              правы, именно развитая молодежь, которая будет выставлять своих
              лидеров поднимет нашу страну на новый уровень, что и является
              поставленной целью нашего елбасы. Как он говорил:” Будущее этой
              страны- наша молодежь”.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
