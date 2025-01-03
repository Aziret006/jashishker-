import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Manrope } from "next/font/google";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
const manrope = Manrope({ subsets: ["latin"] });
const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.backStore}>
        <SocialSidebar />
        <div className={s.heroContainer}>
          <div className={s.container}>
            <div>
              <h2>
                Стартапер и блогер из Жалал-Абада развивает <br /> зеленые
                технологии при поддержке <br /> Европейского Союза
              </h2>
            </div>
            <hr />
            <nav>
              <ul>
                <li>
                  Абдукадыр Абдушукуров из Жалал-Абада. Он стал одним из
                  обладателей гранта в размере 10 тысяч евро в рамках проекта
                  «Молодежь за цифровизацию, лидерство и зеленые навыки»,
                  реализуемого «Энактас Кыргызстан» при финансовой поддержке
                  Европейского Союза.
                  <br />
                  <br />
                  В 2018 году стартапер Абдукодир Абдушукуров начал свой бизнес
                  по выращиванию экологически чистой продукции: винограда,
                  персиков, инжира и эко-мочалок из люффы. Он создал бренд
                  «Фазенда», который включает в себя экотуризм и агроблогинг с
                  ежемесячным охватом более 8 миллионов человек. Также
                  Абдушукуров оказывает услуги садовода.
                  <br />
                  <br />
                  28 марта 2024 года, после презентации своего проекта,
                  Абдушукуров был выбран одним из грантополучателей в размере 10
                  тысяч евро в рамках проекта «Молодежь за цифровизацию,
                  лидерство и зеленые навыки», реализуемого «Энактас Кыргызстан»
                  при финансовой поддержке Европейского Союза.
                </li>
              </ul>
            </nav>
            <div className={s.imgall}>
              <img src="/image23.svg" alt="" />
            </div>
            <div className={s.contextFoot}>
              <ul>
                <li>
                  Главная идея проекта Абдукодира — «Фазенда Сервис» —
                  заключается в предоставлении комплекса садовых услуг в городе
                  Жалал-Абад и за его пределами.
                  <br />
                  <br />
                  Его проект отличается своей инновацией: впервые в городе
                  организованы агро-экскурсии для местных и зарубежных туристов
                  на демонстрационных участках с дегустацией органической
                  продукции.
                  <br />
                  <br />
                  Проект полностью соответствует зеленым технологиям, а именно:
                  использование эффективных методов энергосбережения,
                  переработка отходов, применение эко- и биоудобрений, а также
                  устойчивые методы ухода за растениями. Это помогает снизить
                  негативное воздействие на окружающую среду и повысить
                  экологическую ответственность бизнеса.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
