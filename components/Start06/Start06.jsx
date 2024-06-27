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
export default function Start06() {
  return (
    <div className={s.start}>
      <div className={s.startBlock}>
        <div className={s.startBlockTitle}>
          <span className={FontManrope.className}>06</span>
          <h3 className={FontManrope.className}>
            Зарегистрируйте свой бизнес!
            </h3>
        </div>
        <div className={s.startBlockText}>
          <p>Вот, наконец, и настал важный для вас момент регистрации своего бизнеса.</p>
          <div className={s.startBlockLink}>
            <span>Ссылка:</span>
            <a href="https://mineconom.gov.kg/ru/direct/385/398">https://mineconom.gov.kg/ru/direct/385/398</a>
          </div>
        </div>
      </div>
      <div className={s.startContent}>
        <p>Кто может быть ИП?</p>
        <h5>Индивидуальными предпринимателями могут быть как кыргызстанцы, так и иностранцы, которые постоянно или временно проживают в нашей стране.</h5>
      </div>
      <div className={s.startContent}>
        <p>Если вы решили стать ИП, то надо:</p>
        <div className={s.startContentRight}>
          <h5>Если вы решили стать ИП, то надо:</h5>
          <div className={s.startContentList}>
            <div>
              <div>

              </div>
              <p>– обратиться в Налоговую службу;</p>
            </div>


          </div>
        </div>
      </div>

      

    </div>
  )
}
