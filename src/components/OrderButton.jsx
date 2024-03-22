import React from "react";
import { useTranslation } from "react-i18next";

export default function OrderButton() {
  const { t } = useTranslation();
  return (
    <button className="uppercase bg-orange-500 hover:bg-orange-700 md:w-fit w-[95vw] h-[4vh] md:h-fit self-end mb-[14vh] md:p-[2vh] rounded-sm text-white md:text-[2vh] font-semibold">
      {t("cart.buy")}
    </button>
  );
}
