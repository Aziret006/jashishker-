import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Manrope } from "next/font/google";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import axios from "axios";
import { notFound } from "next/navigation";
import { Api } from "@/api";
import Image from "next/image";
import Link from "next/link";
const manrope = Manrope({ subsets: ["latin"] });

const getUser = async (id) => {
  try {
    const response = await axios.get(`${Api}api/v1/success-story/${id}/`);
    const dataAUerList = await axios.get(
      `https://api.jashishker.kg/api/v1/success-story/`
    );

    return { data: response.data, data1: dataAUerList.data };
  } catch (error) {
    return { data: "error" };
  }
};

export async function generateMetadata({ params }) {
  const { data } = await getUser(params.id);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.images.map((image) => ({
        url: image.image,
        width: 800,
        height: 600,
        alt: data.title,
      })),
    },
  };
}

const page = async ({ params: { id } }) => {
  const { data, data1 } = await getUser(id);

  if (data === "error") {
    return notFound();
  }
  return (
    <div>
      <Haeder />
      <div className={s.backStore}>
        <SocialSidebar />
        <div className={s.heroContainer}>
          <div className={s.container}>
            <div>
              <h2>{data?.title}</h2>
            </div>
            <hr />
            <div className={s.gridTemplate}>
              <div>
                {data?.images && (
                  <div className={s.imgall}>
                    <img src={data?.images[0]?.image} alt="" />
                  </div>
                )}
                <nav dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>
              <div className={s.cards}>
                {data1.slice(3).map((res) => (
                  <Link
                    href={`/success-stories/${res.id}`}
                    key={res}
                    className={s.cardsBlocks}
                  >
                    <img src={res.avatar} alt="" />
                    <ul>
                      <h3>Айпери Абдылдаева</h3>
                      <p>Стартапер и блогер</p>
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
