import React, { useState } from "react";

export default function RadioButtons({choosenSize,handleChange}) {  


  return (
    <form className="flex flex-row">
      {["sm", "m", "lg", "xl", "xxl"].map((el) => (
        <label key={el} className="px-[2vh] flex flex-row gap-2 justify-center items-center uppercase">
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
