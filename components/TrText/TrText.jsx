import React from "react";
import { useTranslations } from "next-intl";

const TrText = () => {
  const t = useTranslations("Home");
  return <>{t("title")}</>;
};

export default TrText;
