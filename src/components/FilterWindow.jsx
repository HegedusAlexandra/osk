import React, { useState, useCallback } from "react";
import { Filter } from "../utils/Enum";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { filteredProductsByPriceRange,filteredProductsByType, resetFilter } from '../redux/slices/productSlice'

function valuetext(value) {
  return `${value}`;
}

export default function FilterWindow() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const gender = Object.keys(Filter);
  const dispatch = useDispatch()
  const [value, setValue] = useState([
    parseInt(localStorage.getItem('lowestPrice'), 10) || 0, // Provide a default value if null
    parseInt(localStorage.getItem('highestPrice'), 10) || 100 // Provide a default value if null
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

  const submitChange = () => {    
    dispatch(resetFilter())
    dispatch(filteredProductsByPriceRange(value))
  };

  const handleType = (el) => {    
    dispatch(resetFilter())
    dispatch(filteredProductsByType(el))
  };

  return (
    <div className="flex flex-row justify-start items-center gap-[1vw] w-full h-full mr-[1vw]">
      {gender.map((el) => (
        <button
          onClick={() => handleType(el)}
          key={el}
          className="w-fit bg-transparent px-2 hover:font-semibold font-montserrat"
        >
          {el}
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
        min={parseInt(localStorage.getItem('lowestPrice'), 10) || 0}
        max={parseInt(localStorage.getItem('highestPrice'), 10) || 100}
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
    </div>
  );
}
