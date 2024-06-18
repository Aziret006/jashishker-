import React from "react";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import s from "./page.module.scss";

const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const Page = () => {
  return (
    <>
      <Haeder />
      <div className={s.aboutAll}>
        <div className={s.aboutContainer}>
          <div className={s.aboutTitle}>
            <h1 className={BeVietnamPro.className}>О проекте</h1>
            <h5 className={Alex.className}>Lorem ipsum dolor sit amet</h5>
          </div>
          <hr />
          <nav className={s.navflex}>
            <ul>
              <h4>«Молодежь за цифровизацию, лидерство и зеленые навыки»</h4>
              <li>
                Энактас Кыргызстан при финансовой поддержке Европейского Союза в
                Кыргызской Республике с декабря 2022 года начал реализацию
                проекта «Молодежь за цифровизацию, лидерство и зеленые навыки».
              </li>
            </ul>
            <Image
              className={s.traced}
              src="/Traced.svg"
              alt="Project illustration"
              width={654}
              height={654}
            />
          </nav>
          <div className={s.navblock}>
            <div className={s.ul}>
              <h4>Цель проекта</h4>
              <p>
                Целью проекта является расширение возможностей молодежи
                Кыргызстана для построения зеленого, инклюзивного и цифрового
                будущего для устойчивого развития в постпандемической
                перспективе.
              </p>
              <Image
                className={s.metam}
                src="/Metam.svg"
                alt="Project goal illustration"
                width={273}
                height={266}
              />
            </div>
            <ul>
              <li>
                В рамках проекта планируется открытие молодежных инклюзивных,
                инновационных хабов в 6 регионах: Чуйской, Иссык-Кульской,
                Нарынской, Баткенской, Жалал-Абадской и Ошской областях
                Кыргызской Республики, которые будут оснащены необходимыми
                человеческими, техническими ресурсами для создания и укрепления
                потенциала местных сообществ, а именно молодежи, женщин и
                уязвимых слоев молодого населения в развитии устойчивых
                экологических доходоприносящих малых предприятий в аграрной
                сфере.
                <br />
                <br />
                Данные хабы будут служить платформой для сельской молодежи, в
                том числе молодых женщин, молодых журналистов, специалистов,
                людей с ограниченными возможностями здоровья, уязвимых молодых
                людей заниматься лидерством, изучать инновации в области
                экологического производства в сельском хозяйстве с применением
                передовых цифровых технологий.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.illustration}>
          <div className={s.aboutContainer}>
            <div className={s.backtitle}>
              <h4>
                Молодежные хабы будут развиваться по трем основным направлениям;
              </h4>
            </div>
            <div className={s.transformborder}>
              <Image
                src="./Group.svg"
                alt="Project illustration"
                width={1247}
                height={870}
              />
            </div>
            <div className={s.abtitle}>
              <h4>
                Молодежные хабы будут создавать зеленую и цифровую экосистему по
                всему Кыргызстану.
              </h4>
              <ul>
                <li>
                  Проект предусматривает создание Фонда поддержки для десяти
                  молодежных инициатив и Субгрантового фонда для поддержки не
                  менее 5 местных НПО, которые играют важную роль в вовлечении
                  молодежи в лидерские, зеленые и цифровые инициативы.
                </li>
              </ul>
            </div>
            <div className={s.contextcenter}>
              <h4>
                За первый год реализации проекта более{" "}
                <span>60 молодых предпринимателей</span> и{" "}
                <span>10 НКО/НПО</span> подали заявки для участия в грантовом
                конкурсе. Из них <span className={s.span}>более 30</span> прошли
                обучение по усилению потенциала в агро и бизнес направлениях.
              </h4>
            </div>
          </div>
        </div>
        <div className={s.aboutContainer}>
          <h4 className={s.ourteamtitle}>Круглый стол</h4>
          <div className={s.ourteamflex}>
            <p>
              В рамках проекта, в феврале в Бишкеке прошел круглый стол. Целью
              круглого стола является выработка механизмов сотрудничества для
              эффективной реализации проекта
            </p>
            <Image
              src="./image5.svg"
              alt="Project illustration"
              width={600}
              height={400}
            />
          </div>
          <nav className={s.ourteamul}>
            <li className={s.ourteamli}>
              Кроме того, в ходе круглого стола приняли участие региональные
              представители Департамента органического сельского хозяйства,
              Департамента молодежной политики, молодые агропредприниматели со
              всех регионов Кыргызстана, эксперты и др. С участием которых были
              организованы фокус-группы.
            </li>
            <li className={s.ourteamli2}>
              В мероприятии приняли участие глава Представительства Европейского
              Союза в КР Мэрилин Джозефсон, первый заместитель министра
              сельского хозяйства Нурдин Алишеров, заместитель министра
              культуры, информации, спорта и молодежной политики КР Марат
              Тагаев.
            </li>
          </nav>
          <div className={s.ourflex2}>
            <nav>
              <p>Стратегическая сессия</p>
              <h4>
                В рамках реализации проекта прошла стратегическая сессия по
                разработке плана развития сельского округа Таш-Мойнок до 2033
                года.
              </h4>
            </nav>
            <Image
              src="/image6.svg"
              alt="Project illustration"
              width={600}
              height={400}
            />
          </div>
          <div className={s.ourflex3}>
            <Image
              width={600}
              height={362}
              src="/image7.svg"
              alt="Project illustration"
            />
            <div className={s.flexblock}>
              {[1, 2, 3].map((item, index) => (
                <div key={index} className={s.flexitem}>
                  <div className={s.star}>
                    <Image
                      src="/star.svg"
                      alt="Project illustration"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>
                    В мероприятии приняли участие депутаты местного совета,
                    активисты и местные бизнесмены. На экспертное заключение
                    были приглашены опытные бизнесмены.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
