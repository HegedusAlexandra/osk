import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { useTranslation } from "react-i18next";
import { Language } from "../utils/Enum";

export default function DropdownComp() {
  const [selectedOption, setSelectedOption] = useState();
  const options = Object.keys(Language);
  const { i18n } = useTranslation();
  const browserLanguages = navigator.languages;

  const findMatchingLanguage = () => {
    const availableLanguages = Object.values(Language);
    const match = browserLanguages.find((lang) =>
      availableLanguages.includes(lang)
    );
    return match.toUpperCase() || 'EN';
  };

  useEffect(
    () => findMatchingLanguage && setSelectedOption(findMatchingLanguage()),
    []
  );

  useEffect(() => {
    i18n.changeLanguage(selectedOption);
  }, [i18n, selectedOption]);

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
        options={options.filter((val) => val !== selectedOption)}
        onChange={(option) => setSelectedOption(option.value)}
        value={selectedOption}
        placeholder="Select an option"
      />
    </div>
  );
}
