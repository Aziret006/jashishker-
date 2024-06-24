import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import React from "react";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"], // specify the desired weight here
});
const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.economyall}>
        <div className={s.economycontainer}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>
              Как составить <br /> бизнес-план
            </h1>
            <div className={s.etext}>
              <p className={Alex.className}>
                Если планируете запускать бизнес, привлекая инвестиции,
                партнеров и квалифицированных сотрудников, вам не обойтись без
                тщательно продуманного бизнес-плана.
              </p>
            </div>
          </div>
          <hr />
          <div className={s.bisnesstext}>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
