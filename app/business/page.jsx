import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import React from "react";
import Image from "next/image";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"], // specify the desired weight here
});
const page = () => {
  const item = [
    {
      id: 1,
      context: "вводная часть и описание компании",
    },
    {
      id: 2,
      context: "рынок и конкурентная среда",
    },
    {
      id: 3,
      context: "описание продукта или услуги",
    },
    {
      id: 4,
      context: "маркетинговая стратегия",
    },
    {
      id: 5,
      context: "организационная структура и управление",
    },
    {
      id: 6,
      context: "финансовые прогнозы и планы привлечения инвестиций",
    },
    {
      id: 7,
      context: "риски и пути их уменьшения",
    },
  ];
  return (
    <div>
      <Haeder />
      <div className={s.economyall}>
        <div className={s.economycontainer}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>
              Как составить <br /> бизнес-план
            </h1>
            <div className={s.etext}>
              <p className={Alex.className}>
                Если планируете запускать бизнес, привлекая инвестиции,
                партнеров и квалифицированных сотрудников, вам не обойтись без
                тщательно продуманного бизнес-плана.
              </p>
            </div>
          </div>
          <hr />
          <div className={s.bisnesstext}>
            <h2>Что такое бизнес-план</h2>
            <nav>
              <Image
                className={s.imgr4}
                src="/image12.svg"
                alt="leadership"
                width={510}
                height={405}
              />
              <li className={s.list1}>
                Итак, <span>бизнес-план</span> – это документ, описывающий
                стратегию и планы развития существующего предприятия или нового
                бизнеса. В нем есть подробное описание продукта или
                предоставляемых услуг, рынка, на котором будет действовать
                фирма, конкурентов, финансовые прогнозы и планы привлечения
                инвестиций. Также в нем исследуют сильные и слабые стороны
                бизнес-проекта, угрозы и потенциал развития (SWOT-анализ). План
                составляют с учетом результатов этого анализа, чтобы максимально
                использовать преимущества, но минимизировать недостатки.
              </li>
              <li className={s.list2}>
                Итак, бизнес-план – это документ, описывающий стратегию и планы
                развития существующего предприятия или нового бизнеса. В нем
                есть подробное описание продукта или предоставляемых услуг,
                рынка, на котором будет действовать фирма, конкурентов,
                финансовые прогнозы и планы привлечения инвестиций. Также в нем
                исследуют сильные и слабые стороны бизнес-проекта, угрозы и
                потенциал развития (SWOT-анализ). План составляют с учетом
                результатов этого анализа, чтобы максимально использовать
                преимущества, но минимизировать недостатки.
              </li>
            </nav>
          </div>
          <div className={s.alwaystext}>
            <h3>В бизнес-плане обычно есть следующие пункты:</h3>
            <div className={s.gridimgtext}>
              <div>
                <Image
                  src="/image13.svg"
                  alt="leadership"
                  width={400}
                  height={272}
                />
                <p>
                  Следуя этому плану, предприниматель может выполнить детальный
                  анализ своего бизнес-проекта и определить направления будущего
                  развития.
                </p>
              </div>
              <div className={s.navgridcontainer}>
                {item.map((_, i) => {
                  return (
                    <div key={i} className={s.navgrid}>
                      <div className={s.navgridflex}>
                        <li>{_.id}</li>
                        <p>{_.context}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <nav className={s.necessitytext}>

          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
