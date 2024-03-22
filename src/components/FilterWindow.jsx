import React, { useState, useCallback } from "react";
import { Filter } from "../utils/Enum";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  filteredProductsByPriceRange,
  filteredProductsByType,
  filteredProductsBySize,
  resetFilteredProducts
} from "../redux/slices/productSlice";
import { motion } from "framer-motion";
import RadioButtons from "./RadioButtons";
import { isEmpty } from "lodash";

function valuetext(value) {
  return `${value}`;
}

export default function FilterWindow() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const gender = Object.keys(Filter);
  const dispatch = useDispatch();
  const [choosenType, setChoosenType] = useState("");
  const [choosenSize, setChoosenSize] = useState("");
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
    !isEmpty(choosenSize) && dispatch(filteredProductsBySize(choosenSize));
    !isEmpty(choosenType) && dispatch(filteredProductsByType(choosenType));
    dispatch(filteredProductsByPriceRange(value));
  };

  const handleType = (el) => {
    setChoosenType(el);
    dispatch(resetFilteredProducts());
    dispatch(filteredProductsByPriceRange(value));
    !isEmpty(choosenSize) && dispatch(filteredProductsBySize(choosenSize));
    dispatch(filteredProductsByType(el));
  };

  const handleSizeFilter = (event) => {
    setChoosenSize(event.target.value);
    dispatch(resetFilteredProducts());   
    dispatch(filteredProductsByPriceRange(value));    
    !isEmpty(choosenType) && dispatch(filteredProductsByType(choosenType));
    dispatch(filteredProductsBySize(event.target.value));
  };

  const clearFilter = () => {
    setIsFiltered(false);
    window.innerWidth > 780 && dispatch(resetFilteredProducts());
  };

  const cleanFilter = () => {
    setIsFiltered(false);
    dispatch(resetFilteredProducts());
  };

  return (
    <div className="flex flex-row justify-start md:items-center items-start md:w-full w-[100%] md:h-full h-[4vh] md:mr-[1vw]">
      {isFiltered ? (
        <motion.div
          className="flex md:flex-row flex-col md:flex-1 w-[100.5%] md:static absolute md:bg-transparent bg-white justify-start items-center gap-[1vw] md:pb-[0vh] md:pt-[0vh] py-[10vh] rounded-3xl md:rounded-none"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <div className="flex flex-row md:gap-[2vw] gap-[10vw] md:py-[0vh] pt-[4vh]">
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
          </div>
          <div className="flex flex-row items-center md:flex-1 w-[100%] md:gap-[1vw] gap-[3vw] md:px-[6vh] px-[12vw] md:pt-[0vh] pt-[4vh]">
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
          <RadioButtons
            handleChange={handleSizeFilter}
            choosenSize={choosenSize}
          />
          {window.innerWidth < 780 && <button
            onClick={cleanFilter}
            className="w-fit flex flex-row justify-center items-center bg-transparent uppercase hover:text-red-500 md:pt-[0vh] pt-[6vh]"
          >
            {t('filter.delete_filter')}
          </button>}
          <button
            onClick={clearFilter}
            className="w-fit flex flex-row justify-center items-center bg-transparent uppercase md:pt-[0vh] pt-[4vh]"
          >
            <span className="material-symbols-outlined text-[2vh] md:mt-[4px] mt-[6vh]">
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
