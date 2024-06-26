"use client"
import React from 'react'
import s from './page.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';


const SwiperNewsIda = ({ data }) => {
    console.log(data.map((res) => res), 'data');

    return (<Swiper pagination={true} modules={[Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        style={{ width: "100%" }} className="mySwiper">
        {data.map((res, i) => (
            <SwiperSlide key={i}  >
                <div className={s.SwiperSlide}>
                    <Image
                        src={res.image} objectFit='cover'
                        fill />
                </div>
            </SwiperSlide>
        ))}


    </Swiper>
    )
}

export default SwiperNewsIda
