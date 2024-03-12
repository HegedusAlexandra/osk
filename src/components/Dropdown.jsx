import React,{useEffect, useState} from "react";
import Dropdown from "react-dropdown";
import { useLanguage } from "../contexts/LanguageContext";
import {Sort, Language } from "../utils/Enum";

export default function DropdownComp({type,filteredProducts,setFilteredProducts}) {
  const {selectedLanguage,setSelectedLanguage} = useLanguage()
  const [selectedSort,setSelectedSort] = useState()
  const options = Object.keys(type === 'Language' ? Language : Sort)

useEffect(() => {
console.log(selectedSort)
if(selectedSort === 'DESC'){
  const sortedProducts = [...filteredProducts].sort((a,b) => b.price-a.price)
  setFilteredProducts(sortedProducts)
} else if (selectedSort === 'ASC'){
  const sortedProducts = [...filteredProducts].sort((a,b) => a.price-b.price)
  setFilteredProducts(sortedProducts)
} 

},[filteredProducts, selectedSort, setFilteredProducts])

  return (
    <div className="w-[4vh] flex justify-center items-center rounded-sm ">
      <Dropdown        
        arrowClosed={
          <span className="material-symbols-outlined">arrow_drop_down</span>
        }
        arrowOpen={
          <span className="material-symbols-outlined">arrow_drop_up</span>
        }
        /* placeholderClassName='flex flex-row ' 
        arrowClassName='bg-yellow-500'
        className=''  */
        menuClassName="absolute text-amber-950 bg-white p-2 pr-6 -translate-x-2 rounded-b-sm"
        controlClassName="flex flex-row "
        options={options.filter((val) => val !== (type === 'Language' ? selectedLanguage : selectedSort))}
        onChange={(option) => (type === 'Language' ? setSelectedLanguage(option.value) : setSelectedSort(option.value))}
        value={type === 'Language' ? selectedLanguage : selectedSort}
        placeholder={type === 'Language' ? "Select an option" : 'ORDER'}
      />
    </div>
  );
}
