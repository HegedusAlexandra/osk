import React, { useState, useCallback } from "react";
import { Filter } from "../utils/Enum";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  filteredProductsByPriceRange,
  filteredProductsByType,
  sortedProductsByPriceRange,
  resetFilteredProducts
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
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const submitChange = () => {
    dispatch(resetFilteredProducts());
    choosenType !== "" && dispatch(filteredProductsByType(choosenType));
    dispatch(filteredProductsByPriceRange(value));
  };

  const handleType = (el) => {
    setChoosenType(el);
    dispatch(resetFilteredProducts());
    dispatch(filteredProductsByPriceRange(value));
    dispatch(filteredProductsByType(el));   
  };

  const clearFilter = () => {
    setIsFiltered(false);
    window.innerWidth > 780 &&  dispatch(resetFilteredProducts());;
  };

  return (
    <div className="flex flex-row justify-start md:items-center items-start md:w-full w-[100%] md:h-full h-[4vh] md:mr-[1vw]">
      {isFiltered ? (
        <motion.div
          className="flex md:flex-row flex-col md:flex-1 w-[95%] md:static absolute md:bg-transparent bg-white justify-start items-center gap-[1vw] md:pb-[0vh] pb-[10vh] rounded-3xl md:rounded-none"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <div className="flex flex-row md:gap-[2vw] gap-[10vw] md:py-[0vh] py-[4vh]">
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
          ))}</div>
          <div className="flex flex-row items-center md:flex-1 w-[100%] md:gap-[1vw] gap-[3vw] md:p-0 px-[14vw]">
            <p className="w-fit">{changeCurr(value[0])}</p>
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
            <p className="w-fit">{changeCurr(value[1])}</p>
          </div>
          <button
            onClick={clearFilter}
            className="w-fit flex flex-row justify-center items-center bg-transparent uppercase"
          >
            <span className="material-symbols-outlined text-[2vh] md:mt-[4px] mt-[10vh]">
              close
            </span>
          </button>
        </motion.div>
      ) : (
        <button
          onClick={() => setIsFiltered(true)}
          className="w-fit flex flex-row bg-transparent uppercase"
        >
          {t("filter.name")}
          <span className="material-symbols-outlined">arrow_right</span>
        </button>
      )}
    </div>
  );
}
