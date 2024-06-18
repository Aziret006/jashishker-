import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";

import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { newsCardData, newsCardDataPage } from "@/data";
import NewsCard from "@/components/Cards/NewsCard/NewsCard";

const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"], // specify the desired weight here
});
const manrope = Manrope({ subsets: ["latin"] });

const page = () => {
  return (
    <div>
      <Haeder />

      <div className={s.news}>
        <div className={s.newsContend}>
          <div className={s.newsTitel}>
            <h1 className={BeVietnamPro.className}>Последние <br />
              новости</h1>
            <p className={Alex.className}>Lorem ipsum dolor sit amet</p>
          </div>
          <div className={` ${manrope.className} ${s.newsBloc1}`}>
            <p className={s.newsBloc1Titel}>топ новости</p>
            <div className={s.borderBootm}>
            </div>
            <div className={s.newsBloc1Main}>
              <div className={s.newsBloc1MainImage}>
                <div className={s.mainImageBlock}>
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/90d0/edc5/2b85991cb4a43749952eb9cff5ff6916?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6NfyyNgqpxd2A2eOrEDb5ajyrlpCQRAKoqWPK7Q6IbiG3Ec-RV~owRNWIc2Fnq8vMWGZ1gywpg2wQJQ-HGjGTJ3dRZFWhPvZYqi~29d4wlqxTHh8gZ5OeOgaTHrBNhXvmWqNsFrK4xwScz54FZRevi1i0NwnWjnBIkEjIaFbn0S6gKFK6ssveawA93GGEBsY59DZ5XMRWrXMVAdfwoVd~jKaBVhcr5NWWn3LdRIuh5Pf7F0bkwLgQZQdNqpZ-hTNOnTDSUtJ~tciuChUBR1YOycCRaEbwI30ZcLuxJPwDANuP73dEJXeUK3RqQr0gRoTPfhaaZN1gySRnj1XKUIGg__"
                    alt="image"
                    fill objectFit="cover"
                  />
                </div>

                <div className={s.mainTitel}>
                  <div className={s.mainTitelBlock1}>
                    <div className={s.mainTitelBlock1ButtonList}>
                      <ul>
                        <li>Politic</li>
                        <li>Top news</li>
                      </ul>
                      <FiShare2 />
                    </div>
                    <div className={s.mainTitelBlock1Text}>
                      <h2>Конкурс на вакансию эксперта по реализации стратегий</h2>
                      <button><GoArrowUpRight /></button>
                    </div>
                    <div className={s.mianTitelWiews}>
                      <p>2.k views</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#161616" />
                      </svg>
                      <p>2 month ago</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className={s.newsBloc1MainCards}>
                {newsCardData.slice(0, 2).map((item, key) => (
                  <NewsCard data={item} key={key} />
                ))}
              </div>
            </div>
          </div>
          <div className={s.Tap}>
            <p>Последние</p>
            <div className={s.TopBorder}>
            </div>
            <p>Популярные</p>
          </div>
          <div className={s.borderBootm}>
          </div>
          <div className={s.newsCards}>
            {newsCardDataPage.map((item, key) => (
              <NewsCard data={item} key={key} />
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default page;

