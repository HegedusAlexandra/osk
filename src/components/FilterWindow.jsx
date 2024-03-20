import React, { useState, useCallback, useEffect } from "react";
import { Filter } from "../utils/Enum";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  filteredProductsByPriceRange,
  filteredProductsByType,
  sortedProductsByPriceRange,
  resetFilter
} from "../redux/slices/productSlice";
import { motion } from "framer-motion";

function valuetext(value) {
  return `${value}`;
}

export default function FilterWindow() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const gender = Object.keys(Filter);
  const dispatch = useDispatch();
  const [choosenType, setChoosenType] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [value, setValue] = useState([
    parseInt(localStorage.getItem("lowestPrice"), 10) || 0, // Provide a default value if null
    parseInt(localStorage.getItem("highestPrice"), 10) || 100 // Provide a default value if null
  ]);

  const changeCurr = useCallback(
    (amount) => {
      let res = 0;
      if (language === "DE") {
        res = amount;
      } else if (language === "EN") {
        res = Math.trunc(amount * 1.2);
      } else {
        res = amount * 380; // Assuming this is the conversion rate for currencies other than DE
      }
      return res;
    },
    [language]
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const submitChange = () => {
    dispatch(resetFilter());
    choosenType !== "" && dispatch(filteredProductsByType(choosenType));
    dispatch(filteredProductsByPriceRange(value));
    dispatch(sortedProductsByPriceRange("ORDER"));
  };

  const handleType = (el) => {
    setChoosenType(el);
    dispatch(resetFilter());
    dispatch(filteredProductsByPriceRange(value));
    dispatch(filteredProductsByType(el));
    dispatch(sortedProductsByPriceRange("ORDER"));
  };

  const clearFilter = () => {
    setIsFiltered(false);
    dispatch(resetFilter());
  };

  return (
    <div className="flex flex-row justify-start items-center w-full h-full mr-[1vw]">
      {isFiltered ? (
        <motion.div
              className="flex flex-row flex-1 justify-start items-center gap-[1vw]"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
        >
          {gender.map((el) => (
            <button
              onClick={() => handleType(el)}
              key={el}
              className={`w-fit bg-transparent px-2 hover:font-semibold font-montserrat ${
                choosenType === el && "font-bold"
              }`}
            >
              {t(`filter.${el}`)}
            </button>
          ))}
          <p>{changeCurr(value[0])}</p>
          <Slider
            getAriaLabel={() => "price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            valueLabelFormat={changeCurr}
            getAriaValueText={valuetext}
            onChangeCommitted={submitChange}
            min={parseInt(localStorage.getItem("lowestPrice"), 10) || 0}
            max={parseInt(localStorage.getItem("highestPrice"), 10) || 100}
            sx={{
              color: "success.main",
              "& .MuiSlider-thumb": {
                borderRadius: "5px",
                width: "10px",
                height: "10px"
              }
            }}
          />
          <p>{changeCurr(value[1])}</p>
          <button
            onClick={clearFilter}
            className="w-fit flex flex-row justify-center items-center bg-transparent uppercase"
          >
            <span className="material-symbols-outlined text-[2vh] mt-[4px]">
              close
            </span>
          </button>
        </motion.div>
      ) : (
        <button
          onClick={() => setIsFiltered(true)}
          className="w-fit flex flex-row  bg-transparent uppercase"
        >
          {t("filter.name")}
          <span className="material-symbols-outlined">arrow_right</span>
        </button>
      )}
    </div>
  );
}
