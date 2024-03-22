import React, { useState } from "react";

export default function RadioButtons({choosenSize,handleChange}) {  


  return (
    <form className="flex flex-row flex-wrap md:pt-[0vh] pt-[4vh] md:px-[0vh] px-[2vw]">
      {["sm", "m", "lg", "xl", "xxl"].map((el) => (
        <label key={el} className="md:px-[2vh] px-[1vh] flex flex-row gap-2 justify-center items-center uppercase">
          <h2>{el}</h2>
          <input
            type="radio"
            value={el}
            checked={choosenSize === el}
            onChange={handleChange}
          />
        </label>
      ))}
    </form>
  );
}
