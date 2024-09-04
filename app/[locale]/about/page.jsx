"use client";
import React from "react";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import s from "./page.module.scss";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import { useParams } from "next/navigation";

const Text = ({ name }) => {
  return <TrText root={"about"} name={name} />;
};

const data = [
  {
    id: 1,
    content: Text({ name: "about_box6_item1" }),
  },
  {
    id: 2,
    content: Text({ name: "about_box6_item2" }),
  },
  {
    id: 3,
    content: Text({ name: "about_box6_item3" }),
  },
];

const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const Page = () => {
  const parms = useParams();
  console.log(parms);
  return (
    <>
      <Haeder />
      <div className={s.aboutAll}>
        <SocialSidebar />
        <div className={s.aboutContainer}>
          <div className={s.aboutTitle}>
            <h1 className={BeVietnamPro.className}>
              <Text name={"about_title"} />
            </h1>
            <h5 className={Alex.className}>
              <Text name={"about_subtitle"} />
            </h5>
          </div>
          <hr />
          <nav className={s.navflex}>
            <ul>
              <h4>
                <Text name={"about_box1_title_top"} />
                <br />
                <Text name={"about_box1_title_bottom"} />
              </h4>
              <li>
                <Text name={"about_box1_desc"} />
              </li>
            </ul>
            <Image
              className={s.traced}
              src="/Vector.svg"
              alt="Project illustration"
              width={622}
              height={446}
            />
          </nav>
          <div className={s.navblock}>
            <div className={s.ul}>
              <h4>
                <Text name={"about_box2_title"} />
              </h4>
              <ul className={s.list}>
                <p>
                  <Text name={"about_box2_subtitle"} />
                </p>
                <li>
                  <Text name={"about_box2_desc_top"} />
                  <br />
                  <br />
                  <Text name={"about_box2_desc_bottom"} />
                </li>
              </ul>
              <Image
                className={s.metam}
                src="/Metam.svg"
                alt="Project goal illustration"
                width={273}
                height={266}
              />
            </div>
          </div>
        </div>
        <div className={s.illustration}>
          <div className={s.aboutContainer}>
            <div className={s.backtitle}>
              <h4>
                <Text name={"about_box3_title"} />
              </h4>
            </div>
            <div className={s.transformborder}>
              <Image
                className={s.transfrom}
                src={
                  parms.locale === "ru"
                    ? "/groupRu.svg"
                    : parms.locale === "en"
                    ? "/groupEn.svg"
                    : parms.locale === "ky"
                    ? "/groupKy.svg"
                    : ""
                }
                alt="Project illustration"
                width={1247}
                height={870}
              />
            </div>
            <div className={s.abtitle}>
              <h4>
                <Text name={"about_box3_subtitle"} />
              </h4>
              <ul>
                <li>
                  <Text name={"about_box3_desc"} />
                </li>
              </ul>
            </div>
            <div className={s.contextcenter}>
              <h4>
                <Text name={"about_box4_desc"} />
              </h4>
            </div>
          </div>
        </div>
        <div className={s.aboutContainer}>
          <h4 className={s.ourteamtitle}>
            <Text name={"about_box5_title"} />
          </h4>
          <div className={s.ourteamflex}>
            <p>
              <Text name={"about_box5_subtitle"} />
            </p>
            <img
              className={s.ourimg}
              src="./image5.svg"
              alt="Project illustration"
              width={600}
              height={400}
            />
          </div>
          <nav className={s.ourteamul}>
            <li className={s.ourteamli}>
              <Text name={"about_box5_desc_left"} />
            </li>
            <li className={s.ourteamli2}>
              <Text name={"about_box5_desc_right"} />
            </li>
          </nav>
          <div className={s.ourflex2}>
            <nav>
              <p>
                <Text name={"about_box6_subtitle"} />
              </p>
              <h4>
                <Text name={"about_box6_title"} />
              </h4>
            </nav>
            <img
              className={s.ourimage}
              src="/image6.svg"
              alt="Project illustration"
              width={600}
              height={400}
            />
          </div>
          <div className={s.ourflex3}>
            <Image
              className={s.ourimage}
              width={600}
              height={362}
              src="/image7.svg"
              alt="Project illustration"
            />
            <div className={s.flexblock}>
              {data.map((item, index) => (
                <div key={index} className={s.flexitem}>
                  <div className={s.star}>
                    <Image
                      src="/star.svg"
                      alt="Project illustration"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={s.ourtitle}>
            <p>
              <Text name={"about_box7_subtitle"} />
            </p>
            <h4>
              <Text name={"about_box7_title"} />
            </h4>
          </div>
          <div className={s.ourtextfleximg}>
            <nav>
              <p>
                <Text name={"about_box7_desc_top"} />

                <br />
                <br />
                <Text name={"about_box7_desc_bottom"} />
              </p>
              <div className={s.ourtextimg2}>
                <h5>
                  <Text name={"about_box7_single_desc"} />
                </h5>
              </div>
            </nav>
            <Image
              className={s.ourtextimg}
              src="/image8.svg"
              alt="Project illustration"
              width={600}
              height={440}
            />
          </div>
          <div className={s.footflex4}>
            <p>
              Выдача грантов
              <Text name={"about_box8_subtitle"} />
            </p>
            <h4>
              <Text name={"about_box8_title"} />
            </h4>
          </div>
          <div className={s.footborder}>
            <h4>
              <Text name={"about_box8_unTitle"} />
            </h4>
            <div className={s.img4}>
              <img
                className={s.footimgborder}
                src="/image9.svg"
                alt="Project illustration"
                width={1070}
                height={230}
              />
            </div>
          </div>
          <div className={s.footraduis}>
            <h4>
              <Text name={"get_25"} />
            </h4>
            <div className={s.img5}>
              <img
                src={
                  parms.locale === "ru"
                    ? "/aboutRu.svg"
                    : parms.locale === "en"
                    ? "/aboutEn.svg"
                    : parms.locale === "ky"
                    ? "/aboutKy.svg"
                    : ""
                }
                alt="Project illustration"
                width={944}
                height={683}
              />
            </div>
          </div>
          <div className={s.footend}>
            <p>
              <Text name={"about_box9_desc"} />
            </p>
            <h4>
              <Text name={"about_box9_title"} />
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
