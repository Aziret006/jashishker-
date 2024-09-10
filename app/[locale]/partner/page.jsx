import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import imageorg from "../../../public/imageorg.svg";
import imageorg2 from "../../../public/imageorg2.svg";
import imageorg4 from "../../../public/imageorg4.svg";
import imageorg5 from "../../../public/imageorg5.svg";
import imageorg6 from "../../../public/imageorg6.svg";
import imageorg7 from "../../../public/imageorg7.svg";
import imageorg8 from "../../../public/imageorg8.svg";
import imageorg9 from "../../../public/imageorg9.svg";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};

const Text = ({ name }) => {
  return <TrText name={name} root={"partner"} />;
};

const page = () => {
  const items = [
    {
      src: "/imageorg.svg",
      alt:
        "Департамент Органического Сельского Хозяйства при Министерстве сельского хозяйства Кыргызской Республики",
      text:
        "Департамент Органического Сельского Хозяйства при Министерстве сельского хозяйства Кыргызской Республики",
    },
    {
      src: "/imageorg2.svg",
      alt: "Министерство Сельского хозяйства КР",
      text: "Министерство Сельского хозяйства КР",
    },
    {
      src: "/imageorg4.svg",
      alt:
        'Государственным предприятием "Центр цифровизации и маркетинга "АгроСмарт"',
      text:
        'Государственным предприятием "Центр цифровизации и маркетинга "АгроСмарт"',
    },
    {
      src: "/imageorg5.svg",
      alt:
        "Общественный фонд «Фонд социального партнерства по развитию регионов»",
      text:
        "Общественный фонд «Фонд социального партнерства по развитию регионов»",
    },
    {
      src: "/imageorg6.svg",
      alt:
        "Министерством культуры, информации, спорта и молодежной политики Кыргызской Республики",
      text:
        "Министерством культуры, информации, спорта и молодежной политики Кыргызской Республики",
    },
    {
      src: "/imageorg7.svg",
      alt: 'Объединение юридических лиц "Зеленый Альянс Кей Джи"',
      text: 'Объединение юридических лиц "Зеленый Альянс Кей Джи"',
    },
    {
      src: "/imageorg8.svg",
      alt:
        "Государственным агентством интеллектуальной собственности и инноваций при Кабинете Министров Кыргызской Республики",
      text:
        "Государственным агентством интеллектуальной собственности и инноваций при Кабинете Министров Кыргызской Республики",
    },
    {
      src: "/imageorg9.svg",
      alt: "Фонд развития предпринимательства",
      text: "Фонд развития предпринимательства",
    },
    {
      src: "/imageorg4.svg",
      alt:
        "Министерство труда социального обеспечения и миграции Кыргызской Республики",
      text:
        "Министерство труда социального обеспечения и миграции Кыргызской Республики",
    },
    {
      src: "/imageorg5.svg",
      alt: "Министерство образования и науки Кыргызской Республики",
      text: "Министерство образования и науки Кыргызской Республики",
    },
  ];
  return (
    <div>
      <Haeder />
      <div className={s.partner}>
        <SocialSidebar />
        <div className={s.container}>
          <div className={s.partnerText}>
            <h1 className={BeVietnamPro.className}>
              <Text name={"partner_title"} />
            </h1>
          </div>
          <div className={s.partnerBorder} />
          <div className={s["grid-container"]}>
            {items.map((item, index) => (
              <div key={index} className={s["grid-item"]}>
                <Image src={item.src} alt={item.alt} width={100} height={100} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
