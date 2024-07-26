import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accordion";
import Digitalization from "@/components/Digitalization/Digitalization";
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

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});
const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.digitalization}>
        <SocialSidebar />
        <div className={s.container}>
          <h2 className={BeVietnamPro.className}>Цифровизация</h2>
          <div className={s.border} />
          <div className={s.hero}>
            <div className={s.heroText}>
              <h5 className={FontManrope.className}>
                Цифровые навыки: какие бывают и зачем их нужно развивать
              </h5>
              <p className={FontManrope.className}>
                Время диктует: научный и технический прогресс и развитие
                искусственного интеллекта привело к цифровизации различных сфер
                жизни человека. Как оставаться в тренде и какие digital-навыки
                полезно развивать ― поговорим в этой статье.
              </p>
            </div>
            <Image
              src="/digitalization.svg"
              width={1240}
              height={500}
              alt="digitalization"
              objectFit="cover"
            />
          </div>
          <div className={s.content}>
            <div className={s.contentText}>
              <h4 className={FontManrope.className}>
                Что такое цифровые навыки?
              </h4>
              <div className={s.contentTextBlock}>
                <p></p>
                <p className={FontManrope.className}>
                  Есть три основных способа, как составить бизнес-план: написать
                  самостоятельно с нуля, использовать готовый шаблон либо
                  заказать сторонним экспертам. Каждый вариант имеет свои плюсы
                  и минусы. В принципе, наиболее предпочтительным является
                  первый. Он позволяет тщательно разобраться в выбранном вами
                  рыночном сегменте, значительно улучшить свою экспертизу, сразу
                  же изменить или доработать бизнес-план, если окажется, что он
                  не позволяет достигать назначенных целей. К тому же этот
                  способ максимально доступный, так как не требует
                  дополнительных расходов. Однако у него есть немало
                  недостатков. Во-первых, на его подготовку может уйти гораздо
                  больше времени, чем вы изначально планировали. Во-вторых, у
                  вас может просто не хватить квалификации, а также
                  аналитических данных по нужной рыночной нише, чтобы все
                  сделать правильно. Поэтому самостоятельно сделанный документ
                  рекомендуется показать знакомым экспертам: маркетологам,
                  финансовым директорам, другим предпринимателям.
                </p>
              </div>
            </div>
          </div>
          <Digitalization />
          <div className={s.contentBlock}>
            <div className={s.contentText}>
              <h4 className={FontManrope.className}>
                Важность развития цифровых знаний и навыков
              </h4>
              <div className={s.contentTextBlock}>
                <span></span>
                <div className={s.contentTextBlockList}>
                  <p className={FontManrope.className}>
                    Высокотехнологичные сферы бизнеса развиваются с космической
                    прогрессией, соответственно, растёт спрос на экспертов с
                    развитыми цифровыми навыками. Портал для поиска работы и
                    подбора персонала HeadHunter опубликовал рейтинг профессий
                    будущего, сформированный нейросетью. В списке встречается
                    цифровой лингвист, нейропилот и медиаполицейский. Некоторые
                    профессии актуальны уже сегодня. Например, специалист по
                    кибербезопасности или эксперт по ИИ-этике — тот случай,
                    когда будущее уже наступило.
                  </p>
                  <p className={FontManrope.className}>
                    Специалистам, которые хотят развиваться и конкурировать в
                    онлайн-мире, необходимо постоянно повышать уровень цифровых
                    навыков. Это поможет быть в тренде, управлять технологиями и
                    строить успешную карьеру.
                  </p>
                  <p className={FontManrope.className}>
                    Прогрессивные компании учитывают технический прогресс и
                    цифровизацию экономики. Они стараются быть на шаг впереди и
                    внедряют современные решения в бизнес-среду. В России уже
                    есть трендсеттеры, которые пошли по цифровому пути. Они
                    активно используют новейшие технологии и развивают прорывные
                    проекты, за которыми стоит будущее. Например, компания
                    «Сибур» активно применяет промышленный IoT —  на всех
                    заводах и предприятиях установлены датчики, которые
                    фиксируют информацию о состоянии оборудования и передают ее
                    в режиме реального времени.Также из интересного —  компания
                    использует ИИ для распознавания лиц сотрудников на входе в
                    центральный офис. Теперь точно не потеряешь пропуск.
                  </p>
                  <p className={FontManrope.className}>
                    Такая деятельность возможна при наличии необходимых
                    компетенций у топ-менеджмента и сотрудников компании.
                    Поэтому дальновидные компании готовы вкладываться в
                    образование и совершенствование знаний своих сотрудников.
                    Если хотите узнать, что думают об этом топ-менеджеры
                    крупнейших российских компаний, смотрите уникальный
                    образовательный сериал «Карьерный код» и вдохновляйтесь.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accordion />
        <div className={s.container}>
          <div className={s.contentBlock3}>
            <div className={s.contentText}>
              <h4 className={FontManrope.className}>Подведём итоги</h4>
              <div className={s.contentTextBlock}>
                <span></span>
                <div className={s.contentTextBlockList}>
                  <p className={FontManrope.className}>
                    Цифровая революция заглядывает в наши окна. Сложно
                    представить жизнь современного человека без цифровых
                    устройств и онлайн-услуг. Эти возможности улучшают жизнь
                    человека, помогают в общении, развитии и работе. Поэтому
                    важно научиться эффективно ими пользоваться и управлять.
                  </p>
                  <p className={FontManrope.className}>
                    Цифровизация оказывает влияние и на бизнес. Предприятия и
                    целые отрасли трансформируются: рабочие задачи усложняются,
                    количество данных растёт, бизнес-процессы автоматизируются.
                    На рынке ценятся специалисты, которые быстро адаптируются к
                    переменам, осваивают новые технологии, развивают цифровые
                    навыки и помогают компаниям расти и развиваться в
                    digital-среде.
                  </p>
                  <p className={FontManrope.className}>
                    Ещё ценнее те специалисты, которые обладают цифровыми и
                    мягкими навыками. Баланс таких компетенций позволяет умело
                    использовать цифровую экспертизу и помогает стать лидером
                    нового поколения, который не только управляет процессами, но
                    и ведёт команду вперед.
                  </p>
                  <div className={`${s.textBold} ${FontManrope.className}`}>
                    Прокачивайте те навыки, которые необходимы именно вам,
                    совершенствуйтесь в своей профессии или осваивайте новую. У
                    вас всё получится, удачи!
                  </div>
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
