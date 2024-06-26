"use client"
import React from 'react'
import s from './page.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';


const SwiperNewsIda = ({ data }) => {

    return (<Swiper pagination={true} modules={[Autoplay]}
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
    )
}

export default SwiperNewsIda
