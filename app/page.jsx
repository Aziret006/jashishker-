import Image from "next/image";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import { Bebas_Neue, Manrope } from "next/font/google";
import Footer from "@/components/Footer/Footer";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className={`${manrope.className} ${s.container}`}>
      <Haeder />
      <div className={s.mainBlock}>
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
              src="/mainBgImage1.png"
              alt="mainImage"
              fill
              objectPosition="top"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className={s.CardListBlock}>
        <div>
          <h3>Зеленая экономика</h3>
          <div>

            <Image src={'/mainImageCardList.png'} alt="mainImage" objectFit="contain" layout="fill" />
          </div>
          <p>Устойчивая экономическая модель: ответственное использование ресурсов, компромисс между ростом и сохранением природных богатств.</p>
        </div>
        <div>
          <h3>Цифровизация</h3>
          <div> <Image src={'/mainImageCardList1.png'} alt="mainImage" objectFit="contain" layout="fill" />
          </div>
          <p>Цифровизация — внедрение цифровых технологий в бизнес для повышения эффективности, качества продукции, сокращения издержек и увеличения доходов.</p>
        </div>
        <div>
          <h3>Лидерство</h3>
          <div> <Image src={'/mainBgImage2.png'} alt="mainImage" objectFit="contain" layout="fill" />
          </div>
          <p>Лидерство включает в себя искусство мотивации и направления группы, с акцентом на эффективное принятие решений, с тем, чтобы достичь общих целей и задач.</p>
        </div>
        <div className={s.CardListBlock4}>
          <span className={s.CardListBlock4Titel}>
            <h2>Инновации</h2>
            <p>Инновация – это создание и внедрение новых идей или технологий с целью улучшения текущих условий и решения проблем. Она характеризуется новизной, применимостью и эффективностью.</p>
          </span>

          <div className={s.CardListBlock4TitelBg}>
            <Image src={'/04.svg'} alt="mainImage" objectFit="contain" layout="fill" />
          </div>
          <div className={s.CardListBlock4TitelImage} >
            <Image src={'/mainImageCardList3.png'} alt="mainImage" objectFit="contain" layout="fill" />
          </div>
        </div>
      </div>

      <div className={s.Block3}>
        <div className={s.Block3Titel}>
          <div>
            <p>Как открыть свой бизнес</p>
          </div>
          <div>
            <p  >С чего начать бизнес?</p>
            <span>
              <p>От идеи до бизнес-плана, наш обзор поможет вам освоить основы старта, сократив риски и повысив шансы на успех.”</p>
            </span>
          </div>
        </div>
      </div>
      <div className={s.LastNews}></div>
      <Footer />
    </div>
  );
}
