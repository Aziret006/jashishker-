
import React from 'react'
import s from './page.module.scss'
import Haeder from '@/components/Haeder/Haeder';
import Footer from '@/components/Footer/Footer';
import { FiShare2 } from 'react-icons/fi';

import NewsCard from '@/components/Cards/NewsCard/NewsCard';
import { newsCardData } from '@/data';
import axios from 'axios';
import SwiperNewsIda from '@/components/Swipers/SwiperNewsIda/SwiperNewsIda';
import { Api } from '@/api';

const page = async ({ id }) => {


    const data = await axios.get(`${Api}api/news/${id}/`).then(res => res.data).catch(err => console.log(err , 'asdasd'))
    console.log(data, 'data');

    return (
      <div className={s.news}>
        <Haeder />
        <div className={s.newsHaeder}>
          <div className={s.newsContend}>
            <div className={s.newsNav}>

              <ul>
                <li>Politic</li>
                <li>Top news</li>
              </ul>
              <FiShare2 />
            </div>
            <h1>Конкурс на вакансию эксперта по реализации стратегий</h1>

            <div className={s.Cards}>
              <div className={s.SwiperCards}>
                <div className={s.Swiper}>
                  <SwiperNewsIda data />
                </div>
                <p>
                  В рамках проекта «Молодежь за цифровизацию, лидерство и зеленые навыки», Энактас Кыргызстан объявляет конкурс на вакансию эксперта по реализации стратегий
                  Требования и техническое задание по ссылке:
                  Процедура подачи заявок и отбора:
                  Всем соискателям, соответствующим квалификационным требованиям, предлагается отправить свои  заявки по следующему электронному адресу – enactuskyrgyzstan@gmail.com  до 20 мая  2024 года, до  17.00 часов, указав в теме письма «на эксперта по реализации стратегии хабов»
                  Соискатели, включенные в список кандидатов на должность, будут приглашены на собеседование.
                  Примечание: Вакансия будет закрыта, как только будет найден подходящий кандидат.</p>
                <span>
                  <p>2.k views</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                    <circle cx="2" cy="2.5" r="2" fill="#161616" />
                  </svg>
                  <p>2 month ago</p>
                </span>
              </div>
              <div className={s.CardList}>
                {newsCardData.slice(0, 2).map((item, key) => (
                  <NewsCard data={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  export default page



