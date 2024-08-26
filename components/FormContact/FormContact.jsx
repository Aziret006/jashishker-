"use client";
import { Manrope } from "next/font/google";
import s from "../../app/[locale]/contact/page.module.scss";
import TrText from "../TrText/TrText";
import Image from "next/image";

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"], // specify the desired weight here
});

export default function FormContact() {
  return (
    <div className={s.contactForm}>
      <div className={s.containerForm}>
        <div className={s.formWrapper}>
          <div className={s.formTitle}>
            <Image
              src="/contact.svg"
              alt="contact"
              width={403.859}
              height={470}
            />
            <div className={s.title}>
              <h4 className={FontManrope.className}>
                <TrText root={"contact"} name={"l1"} />
              </h4>
              <h5 className={FontManrope.className}>
                <span></span> <TrText root={"contact"} name={"l2"} />{" "}
              </h5>
            </div>
            <p className={FontManrope.className}>
              <TrText root={"contact"} name={"tt"} />
            </p>
          </div>
          <div className={s.form}>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText
                  root={"home"}
                  name={"section_support_form_label_name"}
                />
              </label>
              <input
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_support_form_placeholder_name",
                })}
              />
            </div>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText
                  root={"home"}
                  name={"section_support_form_label_email"}
                />
              </label>
              <input
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_support_form_placeholder_email",
                })}
              />
            </div>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText root={"home"} name={"section_5_form_label_theme"} />
              </label>
              <input
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_5_form_placeholder_theme",
                })}
              />
            </div>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText
                  root={"home"}
                  name={"section_support_form_label_message"}
                />
              </label>
              <input
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_5_form_placeholder_message",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
