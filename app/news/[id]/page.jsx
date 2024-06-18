"use client"
import React from 'react'
import s from './page.module.scss'
import Haeder from '@/components/Haeder/Haeder';
import Footer from '@/components/Footer/Footer';
import { FiShare2 } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import NewsCard from '@/components/Cards/NewsCard/NewsCard';
import { newsCardData } from '@/data';
const page = ({ id }) => {
  console.log(id);
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
                <Swiper pagination={true} modules={[Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  style={{ width: "100%" }} className="mySwiper">
                  <SwiperSlide >
                    <div className={s.SwiperSlide}>
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/90d0/edc5/2b85991cb4a43749952eb9cff5ff6916?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6NfyyNgqpxd2A2eOrEDb5ajyrlpCQRAKoqWPK7Q6IbiG3Ec-RV~owRNWIc2Fnq8vMWGZ1gywpg2wQJQ-HGjGTJ3dRZFWhPvZYqi~29d4wlqxTHh8gZ5OeOgaTHrBNhXvmWqNsFrK4xwScz54FZRevi1i0NwnWjnBIkEjIaFbn0S6gKFK6ssveawA93GGEBsY59DZ5XMRWrXMVAdfwoVd~jKaBVhcr5NWWn3LdRIuh5Pf7F0bkwLgQZQdNqpZ-hTNOnTDSUtJ~tciuChUBR1YOycCRaEbwI30ZcLuxJPwDANuP73dEJXeUK3RqQr0gRoTPfhaaZN1gySRnj1XKUIGg__" alt="image"
                        objectFit='cover'
                        fill />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className={s.SwiperSlide}>
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/90d0/edc5/2b85991cb4a43749952eb9cff5ff6916?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6NfyyNgqpxd2A2eOrEDb5ajyrlpCQRAKoqWPK7Q6IbiG3Ec-RV~owRNWIc2Fnq8vMWGZ1gywpg2wQJQ-HGjGTJ3dRZFWhPvZYqi~29d4wlqxTHh8gZ5OeOgaTHrBNhXvmWqNsFrK4xwScz54FZRevi1i0NwnWjnBIkEjIaFbn0S6gKFK6ssveawA93GGEBsY59DZ5XMRWrXMVAdfwoVd~jKaBVhcr5NWWn3LdRIuh5Pf7F0bkwLgQZQdNqpZ-hTNOnTDSUtJ~tciuChUBR1YOycCRaEbwI30ZcLuxJPwDANuP73dEJXeUK3RqQr0gRoTPfhaaZN1gySRnj1XKUIGg__" alt="image"
                        objectFit='cover'
                        fill />
                    </div>
                  </SwiperSlide>  <SwiperSlide >
                    <div className={s.SwiperSlide}>
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/90d0/edc5/2b85991cb4a43749952eb9cff5ff6916?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6NfyyNgqpxd2A2eOrEDb5ajyrlpCQRAKoqWPK7Q6IbiG3Ec-RV~owRNWIc2Fnq8vMWGZ1gywpg2wQJQ-HGjGTJ3dRZFWhPvZYqi~29d4wlqxTHh8gZ5OeOgaTHrBNhXvmWqNsFrK4xwScz54FZRevi1i0NwnWjnBIkEjIaFbn0S6gKFK6ssveawA93GGEBsY59DZ5XMRWrXMVAdfwoVd~jKaBVhcr5NWWn3LdRIuh5Pf7F0bkwLgQZQdNqpZ-hTNOnTDSUtJ~tciuChUBR1YOycCRaEbwI30ZcLuxJPwDANuP73dEJXeUK3RqQr0gRoTPfhaaZN1gySRnj1XKUIGg__" alt="image"
                        objectFit='cover'
                        fill />
                    </div>
                  </SwiperSlide>  <SwiperSlide >
                    <div className={s.SwiperSlide}>
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/90d0/edc5/2b85991cb4a43749952eb9cff5ff6916?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6NfyyNgqpxd2A2eOrEDb5ajyrlpCQRAKoqWPK7Q6IbiG3Ec-RV~owRNWIc2Fnq8vMWGZ1gywpg2wQJQ-HGjGTJ3dRZFWhPvZYqi~29d4wlqxTHh8gZ5OeOgaTHrBNhXvmWqNsFrK4xwScz54FZRevi1i0NwnWjnBIkEjIaFbn0S6gKFK6ssveawA93GGEBsY59DZ5XMRWrXMVAdfwoVd~jKaBVhcr5NWWn3LdRIuh5Pf7F0bkwLgQZQdNqpZ-hTNOnTDSUtJ~tciuChUBR1YOycCRaEbwI30ZcLuxJPwDANuP73dEJXeUK3RqQr0gRoTPfhaaZN1gySRnj1XKUIGg__" alt="image"
                        objectFit='cover'
                        fill />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>В рамках проекта «Молодежь за цифровизацию, лидерство и зеленые навыки», Энактас Кыргызстан объявляет конкурс на вакансию эксперта по реализации стратегий
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



