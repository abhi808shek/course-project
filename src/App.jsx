import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import FilterSection from "./Components/FilterSection/FilterSection";
import Courses from "./Components/Courses/Courses";
import { apiUrl, filterList } from "./data";
import axios from "axios";

const App = () => {
  const [apiData, setApiData] = useState([]);

  const setApiDataValue = async () => {
    const result = await axios.get(apiUrl);
    setApiData(result?.data?.data);
  };
  // console.log(apiData);
  useEffect(() => {
    setApiDataValue();
  }, []);
  const filteredData = (title) => {
    console.log("title", title);
    // console.log("APIIII DATA", apiData);
    // Object.values(apiData).map((ele) => {
    //   console.log("ele", ele === title);
    //   console.log("ele", ele);
    //   // Object.values(apiData)
    //   if (title === "All") {
    //     setApiData(result?.data?.data);
    //   } else {
    //     setApiData(result?.data?.data);
    //   }
    // });
  };
  return (
    <div className="bg-[#576CBC]">
      <Navbar />
      <div className="w-full flex justify-center">
        <FilterSection
          filterList={filterList}
          setApiData={setApiData}
          apiData={apiData}
          filteredData={filteredData}
        />
      </div>
      <div className="flex flex-wrap">
        <Courses apiData={apiData} />
      </div>
    </div>
  );
};

export default App;
