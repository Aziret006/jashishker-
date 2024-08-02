import Image from "next/image";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import { Bebas_Neue, Manrope } from "next/font/google";
import Footer from "@/components/Footer/Footer";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
import { BsArrowRight } from "react-icons/bs";
import { newsCardData } from "@/data";
import NewsCards from "@/components/Cards/MainNewsCards/NewsCards";
import MainFrom from "@/components/Forms/MainFrom/MainFrom";
import axios from "axios";
import { Api } from "@/api";
import { notFound, redirect } from "next/navigation";
import { ChatBotWidget } from "chatbot-widget-ui";
import Link from "next/link";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};

export default async function Home() {
  let data = null;
  let error = null;
  try {
    const card = await axios.get(`${Api}api/news/?status=new`);
    data = card.data;
  } catch (error) {
    notFound();
  }
  if (error) {
    return <div>Error loading data: {error}</div>;
  } else if (!data) {
    return <div>News article not found</div>;
  } else {
    return (
      <div className={` ${s.container}`}>
        <Haeder />
        <div className={s.mainBlock}>
          <SocialSidebar />

          <div className={s.mainBlockTitel}>
            <h1 className={bebasNeue.className}>
              {" "}
              Managerial optimization for <br /> your companies
            </h1>
            <p className={manrope.className}>
              Проект «Молодежь за цифровизацию, лидерство и зеленые навыки»
              реализуется «Энактас Кыргызстан» <br /> при финансовой поддержке
              Европейского Союза.
            </p>
          </div>
          <div className={s.mainImage}>
            <div className={s.BgDiv}></div>
            <div className={s.BgDiv1}></div>
            <div className={s.mainBgImage}>
              <Image
                className={s.mainBgImage1}
                src="/mainBgImage1.png"
                alt="mainImage"
                fill
                objectPosition="top"
                objectFit="cover"
              />
              <Image
                className={s.mainBgImageTablel1}
                src="/mainBgImageTablel1.png"
                alt="mainImage"
                fill
                objectPosition="top"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div></div>
        <div className={s.CardListBlock}>
          <Link href={"/Economy"}>
            <div>
              <h3>Зеленая экономика</h3>
              <div>
                <Image
                  src={"/image18.svg"}
                  alt="mainImage"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p>
                Устойчивая экономическая модель: ответственное использование
                ресурсов, компромисс между ростом и сохранением природных
                богатств.
              </p>
            </div>
          </Link>
          <Link href={"/digitalization"}>
            <div className={s.blockpadding}>
              <h3>Цифровизация</h3>
              <div>
                {" "}
                <Image
                  src={"/image19.svg"}
                  alt="mainImage"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p>
                Цифровизация — внедрение цифровых технологий в бизнес для
                повышения эффективности, качества продукции, сокращения издержек
                и увеличения доходов.
              </p>
            </div>
          </Link>
          <Link href={"/leadership"}>
            <div>
              <h3>Лидерство</h3>
              <div>
                {" "}
                <Image
                  src={"/image20.svg"}
                  alt="mainImage"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p>
                Лидерство включает в себя искусство мотивации и направления
                группы, с акцентом на эффективное принятие решений, с тем, чтобы
                достичь общих целей и задач.
              </p>
            </div>
          </Link>
          <div className={s.CardListBlock4}>
            <span className={s.CardListBlock4Titel}>
              <h2>Инновации</h2>
              <p>
                Инновация – это создание и внедрение новых идей или технологий с
                целью улучшения текущих условий и решения проблем. Она
                характеризуется новизной, применимостью и эффективностью.
              </p>
            </span>
            <div className={s.CardListBlock4TitelBg}>
              <Image
                src={"/04.svg"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className={s.CardListBlock4TitelImage}>
              <Image
                src={"/mainImageCardList3.png"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          <Link href={"/innovations"}>
            <div className={s.CardListBlock4Mobal}>
              <h3>Инновации</h3>
              <div>
                {" "}
                <Image
                  src={"/image22.svg"}
                  alt="mainImage"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p>
                Инновация – это создание и внедрение новых идей или технологий с
                целью улучшения текущих условий и решения проблем. Она
                характеризуется новизной, применимостью и эффективностью.
              </p>
            </div>
          </Link>
        </div>
        <div className={s.Block3}>
          <div className={s.Block3Titel}>
            <div className={s.Block3TitelText}>
              <p>Как открыть свой бизнес</p>
              <div className={s.mainImageBlock2}>
                <Image
                  src={"/mainImageBlock2.png"}
                  alt="mainImage"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
            <div className={s.Block3TitelTextMain}>
              <p>С чего начать бизнес?</p>
              <span>
                <p>
                  От идеи до бизнес-плана, наш обзор поможет вам освоить основы
                  старта, сократив риски и повысив шансы на успех.”
                </p>
                <a href="/start-business">
                  <button>
                    Подробнее
                    <BsArrowRight />
                  </button>
                </a>
              </span>
              <div className={s.Block3Cards}>
                <div>
                  <div>
                    <span>
                      <Image
                        src={"/Card3Image1.svg"}
                        alt="mainImage"
                        objectFit="contain"
                        layout="fill"
                      />
                    </span>
                    <p>Идея исследование</p>
                  </div>
                  <p>
                    От идеи до бизнес-плана, наш обзор поможет вам освоить
                    основы старта, сократив риски и повысив шансы на успех.”
                  </p>
                </div>
                <div>
                  <div>
                    <span>
                      <Image
                        src={"/Card3Image2.svg"}
                        alt="mainImage"
                        objectFit="contain"
                        layout="fill"
                      />
                    </span>
                    <p>Рынок анализ</p>
                  </div>
                  <p>
                    От идеи до бизнес-плана, наш обзор поможет вам освоить
                    основы старта, сократив риски и повысив шансы на успех.”
                  </p>
                </div>
                <div
                  style={{ borderBottom: " 1px solid rgba(34, 34, 34, 0.30)" }}
                >
                  <div>
                    <span>
                      <Image
                        src={"/Card3Image3.svg"}
                        alt="mainImage"
                        objectFit="contain"
                        layout="fill"
                      />
                    </span>
                    <p>Бизнес-план создание</p>
                  </div>
                  <p>
                    От идеи до бизнес-плана, наш обзор поможет вам освоить
                    основы старта, сократив риски и повысив шансы на успех.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {data.count > 0 && (
          <div className={s.Block4}>
            <div className={s.Block4Titel}>
              <p className={s.Block4TitelText}>Последние новости</p>
              <div className={s.Block4Cards}>
                {data.results.slice(0, 3).map((res) => (
                  <div key={res.id}>
                    <NewsCards data={res} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={s.Block5}>
          <div className={s.Block5Titel}>
            <div className={s.Block5TitelBloc1}>
              <h3>Нужна помощь?</h3>
              <div className={s.Block5TitelImage}>
                <div className={s.Block5TitelImageBg}>
                  <Image
                    src={"/04.svg"}
                    alt="mainImage"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <Image
                  src={"/mainImageBlock5.png"}
                  alt="mainImage"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
            <div className={s.Block5TitelBloc2}>
              <h3>Наши специалисты ответят на ваши вопросы</h3>
              <MainFrom />
            </div>
          </div>
        </div>

        <div className={s.LastNews}></div>
        <Footer />
      </div>
    );
  }
}