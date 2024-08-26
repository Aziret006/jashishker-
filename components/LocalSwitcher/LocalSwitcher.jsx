"use client";

import React, { useState, useTransition } from "react";
import s from "./page.module.scss";
import { useLocale, useTranslation } from "next-intl";
import { Manrope } from "next/font/google";
import { useRouter, usePathname } from "@/navigation";

const manrope = Manrope({ subsets: ["latin"] });

const LocalSwitcher = () => {
  const locale = useLocale();
  // const [select, setSelect] = useState();
  // const [_, startTransition] = useTransition();
  const router = useRouter();
  const pathName = usePathname();

  const handleLocale = (e) => {
    router.replace(pathName, { locale: e.target.value, scroll: false });
  };

  return (
    <div className={s.LocalSwitcher}>
      <label htmlFor="state"></label>{" "}
      <select
        id="state"
        value={locale}
        onChange={(e) => handleLocale(e)}
        className={`${s.select} ${s.manrope}`}
      >
        <option value="ru">Ру</option>
        <option value="ky">Ку</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LocalSwitcher;
