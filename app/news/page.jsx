/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React, { useEffect, useState } from "react";

import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import NewsCard from "@/components/Cards/NewsCard/NewsCard";
import axios from "axios";
import { Api } from "@/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import Loading from "@/components/Loading/Loading";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});
const manrope = Manrope({ subsets: ["latin"] });

const page = () => {
  const [topNews, setTopNews] = useState([]);
  const [newsPopular, setPopular] = useState([]);
  const [filterPage, setFilterPage] = useState("popular");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const topNewsResponse = await axios.get(
        `${Api}api/news/?category=top_news`
      );
      const newsPopularResponse = await axios.get(
        `${Api}api/news/?status=${filterPage}`
      );
      return {
        topNews: topNewsResponse.data.results,
        newsPopular: newsPopularResponse.data.results,
      };
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData().then((data) => {
      if (data) {
        setTopNews(data.topNews);
        setPopular(data.newsPopular);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const newsPopular = await axios.get(
          `${Api}api/news/?status=${filterPage}`
        );
        return {
          newsPopular: newsPopular.data,
        };
      } catch (error) {}
    };
    getData().then((data) => {
      setPopular(data.newsPopular.results);
    });
  }, [filterPage]);
  if (error) {
    return notFound();
  }

  if (loading) {
    return <Loading />;
  }

  if (!newsPopular || newsPopular.length === 0) {
    return <div>Новости не найдены</div>;
  }

  return (
    <div>
      <Haeder />
      <div className={s.news}>
        <SocialSidebar />
        <div className={s.newsContend}>
          <div className={s.newsTitel}>
            <h1 className={BeVietnamPro.className}>
              Последние <br />
              новости
            </h1>
            <p className={Alex.className}>Lorem ipsum dolor sit amet</p>
          </div>
          <div className={` ${manrope.className} ${s.newsBloc1}`}>
            <p className={s.newsBloc1Titel}>топ новости</p>
            <div className={s.borderBootm}></div>
            <div className={s.newsBloc1Main}>
              <div className={s.newsBloc1MainImage}>
                <div className={s.mainImageBlock}>
                  <Image
                    src={topNews[0].images[0].image}
                    alt="image"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className={s.mainTitel}>
                  <div className={s.mainTitelBlock1}>
                    <div className={s.mainTitelBlock1ButtonList}>
                      <ul>
                        <li>{topNews[0].category}</li>
                        <li>{topNews[0].status}</li>
                      </ul>
                      <FiShare2 />
                    </div>
                    <div className={s.mainTitelBlock1Text}>
                      <h2> {topNews[0].title}</h2>
                      <Link href={`/news/${topNews[0].id}`}>
                        {" "}
                        <button>
                          <GoArrowUpRight />
                        </button>{" "}
                      </Link>
                    </div>
                    <div className={s.mianTitelWiews}>
                      <p>{topNews[0].views} views</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <circle cx="2" cy="2" r="2" fill="#161616" />
                      </svg>
                      <p>{topNews[0].time_since_created}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.newsBloc1MainCards}>
                {topNews.slice(1, 3).map((item, key) => (
                  <NewsCard data={item} key={key} />
                ))}
              </div>
            </div>
          </div>
          <div className={s.Tap}>
            <p
              onClick={() => setFilterPage("new")}
              style={{
                color: filterPage == "new" ? "#DA4E38" : "#222",
                cursor: "pointer",
              }}
            >
              {" "}
              Последние
            </p>
            <div className={s.TopBorder}></div>
            <p
              onClick={() => setFilterPage("popular")}
              style={{
                color: filterPage == "popular" ? "#DA4E38" : "#222",
                cursor: "pointer",
              }}
            >
              Популярные
            </p>
          </div>
          <div className={s.borderBootm}></div>
          <div className={s.newsCards}>
            {newsPopular.length > 0 ? (
              newsPopular.map((item, key) => <NewsCard data={item} key={key} />)
            ) : (
              <p>Ничего не найдено</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
