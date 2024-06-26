import React from 'react'
import s from './page.module.scss';
import cm from 'classnames'
import AccordionWhere from '@/components/Accordions/AccordionWhere/AccordionWhere';
const page = () => {
  return (
    <div className={s.testPage} >
      <div style={{
        height: '400px'
      }}>
        1
      </div>
      <div className={s.Accordion}>


        <div className={s.AccordionTitel}>
          <img src='/05.png' className={s.BgSvg} />
          <div className={s.AccordionTitelBlock1}>
            <h1>Как зарегистрировать <br /> бизнес в <br /> Кыргызстане?</h1>
            <img src='/group123.png' alt='/' className={s.AccordionTitelBlock1Image} />
          </div>

          <AccordionWhere />
          <div className={s.AccordionTitel1}>
            <p>ПИН можно получить в любом центре обслуживания <br /> населения, кроме мини-цонов.</p>
            <div>
              <p>Важно</p>
              <h3>Все документы, кроме составленных на государственном или официальном <br /> языке Кыргызской Республики, должны сопровождаться нотариально <br /> засвидетельствованным переводом</h3>

            </div>
            <p>Развернутый перечень документов доступен на сайте :
              <a href="https://mineconom.gov.kg/ru" target='_black'> https://mineconom.gov.kg/ru</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page