import React,{useEffect, useState} from "react";
import Dropdown from "react-dropdown";
import { useLanguage } from "../contexts/LanguageContext";
import {Sort, Language } from "../utils/Enum";
import { useDispatch, useSelector } from "react-redux";
import { sortedProductsByPriceRange } from "../redux/slices/productSlice";;

export default function DropdownComp({type}) {
  const {selectedLanguage,setSelectedLanguage} = useLanguage()
  const [selectedSort,setSelectedSort] = useState()
  const options = Object.keys(type === 'Language' ? Language : Sort)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products)

  const handleSortChange = (sortOrder) => {
    setSelectedSort(sortOrder)
    dispatch(sortedProductsByPriceRange(sortOrder));
  };

  useEffect(() => setSelectedSort(),[products.length])

  return (
    <div className="w-[4vh] flex justify-center items-center rounded-sm ">
      <Dropdown        
        arrowClosed={
          <span className="material-symbols-outlined">arrow_drop_down</span>
        }
        arrowOpen={
          <span className="material-symbols-outlined">arrow_drop_up</span>
        }
        menuClassName="absolute text-amber-950 bg-white p-2 pr-6 -translate-x-2 rounded-b-sm"
        controlClassName="flex flex-row "
        options={options.filter((val) => val !== (type === 'Language' ? selectedLanguage : selectedSort))}
        onChange={(option) => (type === 'Language' ? setSelectedLanguage(option.value) : handleSortChange(option.value))}
        value={type === 'Language' ? selectedLanguage : selectedSort}
        placeholder={type === 'Language' ? "Select an option" : 'ORDER'}
      />
    </div>
  );
}
