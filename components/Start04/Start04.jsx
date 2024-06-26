import React from 'react'
import s from './page.module.scss'
import { Alex_Brush, Be_Vietnam_Pro, Manrope, Mansalva } from "next/font/google";
import Image from 'next/image';

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const FontMansalva = Mansalva({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Start04() {
  return (
    <div className={s.start04}>
      <div className={s.start04Title}>
        <h4 className={FontManrope.className}>
          Узнайте, какие документы необходимы для выбранной вами сферы бизнеса
        </h4>
        <div className={s.start04Text}>
          <Image src="/ellipse04.svg" width={60} height={40} alt="" />
          <span>04</span>
        </div>
      </div>
      <div className={s.start04Wrapper}>
        <Image src="./start04.svg" alt="" width={520} height={220} />
        <p>Для некоторых видов деятельности необходимо получить специальные разрешения и документы для начала ведения деятельности – лицензии, сертификаты, декларации, патенты, медкнижки и др. В большинстве случаев они не требуются, но если ваша деятельность будет связана с работой с детьми, услугами общественного питания или, например, изготовлением пищевой продукции, то рекомендуем заранее проверить нормы законодательства на этот счет.</p>
      </div>
    </div>
  )
}
