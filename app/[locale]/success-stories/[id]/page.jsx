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
const manrope = Manrope({ subsets: ["latin"] });

const getUser = async (id) => {
  try {
    const response = await axios.get(`${Api}api/v1/success-story/${id}/`);
    const dataAUerList = await axios.get(
      `https://api.jashishker.kg/api/v1/success-story/`
    );
    const data = [response.data, dataAUerList.data];

    return data;
  } catch (error) {
    return "error";
  }
};

export async function generateMetadata({ params }) {
  const post = await getUser(params.id);

  return {
    title: post[0].title,
    description: post[0].description1,
    openGraph: {
      title: post[0].title,
      description: post[0].description2,
      images: post[0]?.images.map((image) => ({
        url: image.image,
        width: 800,
        height: 600,
        alt: post[0].title,
      })),
    },
  };
}

const page = async ({ params: { id } }) => {
  const data = await getUser(id);

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
                {data[0]?.images && (
                  <div className={s.imgall}>
                    <img src={data[0]?.images[0]?.image} alt="" />
                  </div>
                )}
                <nav dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>
              <div className={s.cards}>
                {data[0]?.map((res) => (
                  <div key={res} className={s.cardsBlocks}>
                    <Image src="/store.svg" alt="" width={296} height={194} />
                    <ul>
                      <h3>Айпери Абдылдаева</h3>
                      <p>Стартапер и блогер</p>
                    </ul>
                  </div>
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
