import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Manrope } from "next/font/google";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import axios from "axios";
import { notFound } from "next/navigation";
import { Api } from "@/api";
const manrope = Manrope({ subsets: ["latin"] });

const getUser = async (id) => {
  try {
    const response = await axios.get(`${Api}api/v1/success-story/${id}/`);
    return response.data;
  } catch (error) {
    return "error";
  }
};

export async function generateMetadata({ params }) {
  const post = await getUser(params.id);

  return {
    title: post.title,
    description: post.description1,
    openGraph: {
      title: post.title,
      description: post.description2,
      images: post.images.map((image) => ({
        url: image.image,
        width: 800,
        height: 600,
        alt: post.title,
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
            <nav dangerouslySetInnerHTML={{ __html: data?.description1 }} />
            {data?.images && (
              <div className={s.imgall}>
                <img src={data?.images[0]?.image} alt="" />
              </div>
            )}
            <div
              className={s.contextFoot}
              dangerouslySetInnerHTML={{ __html: data?.description1 }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
