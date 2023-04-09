import React from "react";

const FilterSection = ({ filterList,filteredData }) => {
  
  return (
    <div className="flex items-center py-3 text-white xs:w-[100%] xs:gap-1 sm:w-[90%] border-2 sm:gap-3 md:gap-5 md:w-[60%] justify-center">
      {filterList.map((elem,index) => (
        <button className={`xs:text-[14px] bg-blue-500 hover:bg-[#2F0F5D] py-1 px-2 rounded-lg font-bold hover:border-2 `} onClick={()=>filteredData(elem.title)} key={index}>{elem.title}</button>
      ))}
    </div>
  );
};

export default FilterSection;
