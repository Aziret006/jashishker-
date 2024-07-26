import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import React from "react";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};
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
  const item2 = [
    {
      id: 1,
      title: "Начинаете новый бизнес-проект",
      text: "Бизнес-план является ключевым документом для стартапов и новых предприятий. Он помогает понять возможности и риски бизнеса, определить стратегии достижения успеха и получить финансирование.",
    },
    {
      id: 2,
      title: "Меняете стратегию",
      text: "Бизнес-план может быть необходим для пересмотра стратегии организации в случае, если изменились условия ведения бизнеса или целевая аудитория продукта либо проект не приносит ожидаемую прибыль. Он помогает определить новые направления развития, оценить финансовые риски и подготовиться к изменениям.",
    },
    {
      id: 3,
      title: "Меняете стратегию",
      text: "Бизнес-план – это важный документ для привлечения финансирования, так как позволяет инвесторам понять, каким образом предприятие будет приносить прибыль и какие риски связаны с вложением средств. Бизнес-план понадобится и чтобы получить банковский кредит, так как помогает банку оценить финансовую устойчивость предприятия и какие-либо риски, связанные с кредитованием.",
    },
    {
      id: 4,
      title: "Планируете расширять бизнес",
      text: "Бизнес-план позволяет оценить риски, равно как и определить нужные ресурсы, когда развитие компании вышло на новый уровень.",
    },
  ];
  const item3 = [
    {
      id: 1,
      title: "Подробно опишите свой продукт или услугу.",
      context:
        "Сосредоточьтесь на особенностях и характеристиках. Важно указать, чем ваше предложение отличается от конкурентов.",
    },
    {
      id: 2,
      title: "Разработайте маркетинговую стратегию .",
      context:
        "В бизнес-плане нужно указать маркетинговую стратегию, которая поможет привлечь клиентов и увеличить продажи. Кроме того, важно написать, какие каналы маркетинга вы будете использовать, проанализировать ожидаемые затраты и результат.",
    },
    {
      id: 3,
      title: "Определите свои цели.",
      context:
        "Прежде всего обозначьте свои цели и задачи. Какие продукты или услуги вы будете предлагать? Каких клиентов и в каких регионах будете обслуживать? Каким будет ваше конкурентное преимущество?",
    },
    {
      id: 4,
      title: "Изучите рынок.",
      context:
        "Проведите анализ рынка и определите потребности клиентов. Это один из ключевых шагов, который поможет найти вашу целевую аудиторию и понять ее потребности.",
    },
    {
      id: 5,
      title: "Подробно опишите свой продукт или услугу.",
      context:
        "Сосредоточьтесь на особенностях и характеристиках. Важно указать, чем ваше предложение отличается от конкурентов.",
    },
    {
      id: 6,
      title: "Составьте финансовый план.",
      context:
        "Он должен включать прогноз продаж, расходы и прибыль. Например, нужно разъяснить, какие потребуются инвестиции и какие вы прогнозируете финансовые показатели, такие как прибыль, расходы, рентабельность и cash flow. Это один из самых важных шагов.",
    },
    {
      id: 7,
      title: "Риски и управление ими. ",
      context:
        "Здесь нужно перечислить возможные угрозы для бизнеса и способы противостоять им.",
    },
    {
      id: 8,
      title: "Организационная структура и менеджмент.",
      context:
        "Опишите в бизнес-плане структуру и миссию компании, укажите роли и зоны ответственности, организационную культуру, политику управления персоналом.",
    },
    {
      id: 9,
      title: "Приложения.",
      context:
        "Здесь нужно привести дополнительную информацию, которая поможет объяснить ключевые пункты бизнес-плана. Например, это могут быть рекламные материалы, отзывы целевой аудитории, возможные патентные заявки и пр.",
    },
  ];
  return (
    <div>
      <Haeder />
      <div className={s.economyall}>
        <SocialSidebar />
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
                <img
                  className={s.imgs2}
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
            <ul className={s.uls}>
              <h2>
                Когда в нем возникает <br /> необходимость
              </h2>
            </ul>
            <ul className={s.uls2}>
              <p>
                Бизнес-план может понадобиться в разных ситуациях, вот наиболее
                распространенные:
              </p>
            </ul>
          </nav>
          <div className={s.nestextgrid}>
            {item2.map((_, i) => {
              return (
                <nav key={i} className={s.flexnestext}>
                  <ul className={s.ullist}>
                    <li>{_.title}</li>
                  </ul>
                  <ul className={s.ullist2}>
                    <p>{_.text}</p>
                  </ul>
                </nav>
              );
            })}
            <nav className={s.navlist}>
              <li>
                Следовательно, бизнес-план может пригодиться в различных
                ситуациях, так как предприниматель или инвестор всегда нуждается
                в детальной структурированной информации о бизнесе и его
                потенциальных возможностях.
              </li>
            </nav>
          </div>
          <nav className={s.navmenuall}>
            <ul className={s.menuul}>
              <h1>Как его правильно составить</h1>
            </ul>
            <ul className={s.menuul2}>
              <p>
                Написание бизнес-плана – это непростой процесс, на него может
                уйти много времени и усилий. Но именно безукоризненно
                составленный и корректно структурированный бизнес-план поможет
                трезво взглянуть на бизнес, привлечь инвестиции и уменьшить
                риски.
              </p>
            </ul>
          </nav>
          <div className={s.gridtempalatyall}>
            <div className={s.cartblockimg}>
              <h4>
                Ниже приведена пошаговая инструкция, как составить бизнес-план:
              </h4>
              <img
                className={s.imagewidht}
                src="/image14.svg"
                alt="leadership"
                width={800}
                height={467}
              />
            </div>
            {item3.map((_, i) => {
              return (
                <div key={i} className={s.cartblock}>
                  <Image
                    src="/2.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <h4>{_.title} </h4>
                  <p>{_.context}</p>
                </div>
              );
            })}
            <nav className={s.navbottomtext}>
              <h5>
                Следует отметить, что конкретные пункты могут отличаться в
                зависимости от самой бизнес-идеи и целей бизнес-плана. Важно
                сделать документ, который будет ясным, логичным и подробно
                освещать ключевые аспекты вашего бизнеса.
              </h5>
            </nav>
          </div>
          <nav className={s.pagetext}>
            <li>
              Есть три основных способа, как составить бизнес-план: написать
              самостоятельно с нуля, использовать готовый шаблон либо заказать
              сторонним экспертам. Каждый вариант имеет свои плюсы и минусы. В
              принципе, наиболее предпочтительным является первый. Он позволяет
              тщательно разобраться в выбранном вами рыночном сегменте,
              значительно улучшить свою экспертизу, сразу же изменить или
              доработать бизнес-план, если окажется, что он не позволяет
              достигать назначенных целей. К тому же этот способ максимально
              доступный, так как не требует дополнительных расходов. Однако у
              него есть немало недостатков. Во-первых, на его подготовку может
              уйти гораздо больше времени, чем вы изначально планировали.
              Во-вторых, у вас может просто не хватить квалификации, а также
              аналитических данных по нужной рыночной нише, чтобы все сделать
              правильно. Поэтому самостоятельно сделанный документ рекомендуется
              показать знакомым экспертам: маркетологам, финансовым директорам,
              другим предпринимателям.
            </li>
          </nav>
          <nav className={s.pagebtn}>
            <button>Шаблоны</button>
            <li>
              Альтернативный способ – скачать из интернета готовые шаблоны
              бизнес-планов и самостоятельно их заполнить. Шаблоны бизнес-планов
              на странице “Шаблоны”, подготовлено на основе данных Министерства
              Экономики и Коммерции Кыргызской Республики.
            </li>
          </nav>
          <nav className={s.flexcolump}>
            <ul className={s.ul}>
              <h1>Ошибки при составлении бизнес-плана</h1>
            </ul>
            <ul className={s.ul2}>
              <p>
                Среди ошибок, которые предприниматели совершают при написании
                бизнес-плана, наиболее часто называют следующие:
              </p>
            </ul>
          </nav>
          <div className={s.gridblockcolump2}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
              return (
                <div key={i} className={s.gridblock}>
                  <h4>Поверхностное исследование рынка.</h4>
                  <p>
                    Многие бизнесмены фокусируются на своей идее, не обращая
                    должного внимания на рыночные тенденции и деятельность
                    конкурентов. Это может привести к неожиданным трудностям при
                    выходе на рынок.
                  </p>
                </div>
              );
            })}
          </div>
          <nav className={s.jcend}>
            <h4>
              Исключение этих ошибок поможет предпринимателям составить
              бизнес-план, который будет эффективным и убедительным для
              потенциальных инвесторов и партнеров.
            </h4>
          </nav>
          <div className={s.foottop}>
            <h1>План готов – что с ним делать далее</h1>
            <nav>
              <Image
                className={s.image15}
                src="/image15.svg"
                alt="image"
                width={510}
                height={405}
              />
              <ul>
                <li>
                  После того, как бизнес-план составлен, его нужно еще раз
                  детально проанализировать и доработать при необходимости.
                  Прежде всего обратите внимание на детали финансовых расчетов,
                  чтобы убедиться, что они реалистичны и сбалансированы. Затем
                  проверьте, учтены ли все важные факторы, такие как
                  потенциальная местная конкуренция, государственное
                  регулирование, прочие риски и затраты.
                </li>
                <li>
                  Далее попытайтесь получить финансирование, которое поможет вам
                  в реализации запланированного проекта. Для этого можно
                  обратиться к каким-либо инвесторам, банкам или фондам
                  поддержки предпринимательства.
                </li>
                <li>
                  Бизнес-план служит важным документом и для внутреннего
                  использования, так как он помогает руководству и сотрудникам
                  воплощать стратегию развития и отслеживать результаты.
                  Поскольку его реализация иногда занимает немало времени, важно
                  периодически проверять, действенны ли стратегии и расчеты, и
                  корректировать свои намерения.
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
