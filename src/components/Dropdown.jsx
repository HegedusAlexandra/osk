import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { useLanguage } from "../contexts/LanguageContext";
import { Sort, Language, Sitemap } from "../utils/Enum";
import { useDispatch, useSelector } from "react-redux";
import { sortedProductsByPriceRange } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "../hooks/scrollY";
import i18next from "i18next";

export default function DropdownComp({ type }) {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [selectedSort, setSelectedSort] = useState();
  const [selectedSite, setSelectedSite] = useState();
  const [dropdownKey, setDropdownKey] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const scrollY = useScrollPosition();

  const handleSortChange = (sortOrder) => {
    setSelectedSort(sortOrder);
    dispatch(sortedProductsByPriceRange(sortOrder));
  };

  const handleSiteChange = (site) => {
    setSelectedSite(site);
    navigate(
      `/${
        site === "HOME"
          ? Sitemap.HOME
          : site === "PRODUCTS"
          ? Sitemap.PRODUCTS
          : Sitemap.CART
      }`
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => setSelectedSort(), [products.length]);

  useEffect(() => {
    setSelectedSort();
  }, [products.length]);

  useEffect(() => {
    setDropdownKey((prevKey) => prevKey + 1);
  }, [scrollY, i18n.language]);

  let options = Object.keys(
    type === "Language" ? Language : type === "Footer" ? Sitemap : Sort
  ).map((option) => {
    return {
      value: option,
      label: type !== "Language" ? t(`dropdown.${option}`) : option
    };
  });

  return (
    <div
      className={`w-[4vh] ${
        type !== "Language" && "w-fit ml-[2vh]"
      } flex justify-center items-center rounded-sm`}
    >
      <Dropdown
        key={dropdownKey}
        arrowClosed={
          <span className="material-symbols-outlined">arrow_drop_down</span>
        }
        arrowOpen={
          <span className="material-symbols-outlined">arrow_drop_up</span>
        }
        menuClassName="absolute text-amber-950 bg-white p-2 pr-6 -translate-x-2 rounded-b-sm"
        controlClassName="flex flex-row "
        options={options}
        onChange={(option) =>
          type === "Language"
            ? setSelectedLanguage(option.value)
            : type === "Footer"
            ? handleSiteChange(option.value)
            : handleSortChange(option.value)
        }
        value={
          type === "Language"
            ? selectedLanguage
            : type === "Footer"
            ? selectedSite
            : selectedSort
        }
        placeholder={
          type === "Language"
            ? "Select an option"
            : type === "Footer"
            ? t("footer.sitemap").toUpperCase()
            : t("footer.order").toUpperCase()
        }
      />
    </div>
  );
}
