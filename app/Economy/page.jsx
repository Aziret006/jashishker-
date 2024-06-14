import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";

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
            <h1 className={BeVietnamPro.className}>Зеленая экономика</h1>
            <h5 className={Alex.className}>Lorem ipsum dolor sit amet</h5>
          </div>
          <hr />
          <div className={s.econtext}>
            <h4>
              Зеленая экономика – это модель экономического развития,
              предполагающая ответственное отношение человека к ресурсам.{" "}
            </h4>
            <p>
               Она направлена на поиск разумного компромисса между экономическим
              ростом и сохранением природных богатств. Это устойчивость развития
              и она остается важнейшей долгосрочной целью многих стран мира, в
              том числе Кыргызской Республики. Но для ее достижения необходимо
              сделать экономику зеленой.
            </p>
          </div>
          <div className={s.etextend}>
            <p>
              В течение длительного времени развитие Кыргызской Республики,
              также как и большинства стран мира, было ориентировано на
              достижение экономического роста, в основном за счет интенсивного и
              нерационального использования природных ресурсов. В последние годы
              стало очевидным, что дальнейшее движение по пути экономического
              роста, без должного учета экологических и социальных факторов,
              таит угрозы как для нынешнего, так и для будущих поколений.
            </p>
          </div>
          <div className={s.eimg}>
            <Image
              src="/leadership.svg"
              alt="leadership"
              fill
              objectFit="cover"
            />
          </div>
          <div className={s.eimgend}>
            <p>
              В Кыргызской Республике понимание зеленой экономики определено как
              экономики, которая приводит к повышению благосостояния людей и
              укреплению социальной справедливости при одновременном
              существенном снижении рисков для окружающей среды, сохраняющей и
              преумножающей природный капитал, эффективно использующей ресурсы и
              стимулирующей сохранение естественных экосистем страны.
            </p>
            <p>
              В течение длительного времени развитие Кыргызской Республики,
              также как и большинства стран мира, было ориентировано на
              достижение экономического роста, в основном за счет интенсивного и
              нерационального использования природных ресурсов. В последние годы
              стало очевидным, что дальнейшее движение по пути экономического
              роста, без должного учета экологических и социальных факторов,
              таит угрозы как для нынешнего, так и для будущих поколений.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
