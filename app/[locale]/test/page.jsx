import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("HomePage");
  return <div style={{ color: "red" }}>{t("title")}</div>;
};

export default page;
