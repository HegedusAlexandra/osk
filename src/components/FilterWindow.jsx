import React,{useRef,useState} from 'react'
import {Filter} from '../utils/Enum'
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
  }

export default function FilterWindow() {
const gender = Object.keys(Filter)

const [value, setValue] = useState([20, 37]);

const handleChange = (event,newValue) => {
    setValue(newValue );
  };
 
  return (
    <div className="flex flex-row justify-start items-center gap-[1vw] w-full h-full mr-[1vw]">
      {gender.map((el) => (
        <button key={el} className="w-fit bg-transparent px-2 hover:font-semibold font-montserrat">
          {el}
        </button>
      ))}
      <p>{value[0]}</p>
      <Slider
        getAriaLabel={() => 'price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
            color: 'success.main',
            '& .MuiSlider-thumb': {
              borderRadius: '5px',
              width:'10px',
              height:'10px'
            },
          }}
      /> 
      <p>{value[1]}</p>
    </div>
  )
}
