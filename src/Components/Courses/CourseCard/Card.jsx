import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Card = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const  [favourite, setFavourite] = useState(false);
  const { description } = data;
  const shotDescription = description.substring(0, 200);
  const onFavourite = ()=>{
    setFavourite(!favourite)
  }
  return (
    <div className="lg:w-[32%] sm:w-[80%] md:w-[45%] bg-[#19376D] flex flex-col my-2 rounded-md">
      <div className="border-blue-400 h-40 w-full rounded-t-lg">
        <img
          src={data?.image?.url}
          alt={data?.image?.alt}
          className=" w-full h-full rounded-t-lg"
        />
      </div>
      <div className="flex justify-end pr-3 mt-1">
        
        {favourite ?<AiFillHeart size={28} color="#159895" className="cursor-pointer" onClick={onFavourite}/> : <AiOutlineHeart  size={28} color="#159895" className="cursor-pointer" onClick={onFavourite}/>}
      </div>
      <div className="px-4">
        <h1 className="text-white font-bold text-xl mt-1">{data?.title}</h1>
        <p className="text-white py-3 text-sm mb-2">
          {showMore ? description : `${shotDescription}...`}
          <span
            className="text-xs text-[#2F58CD] font-bold cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Read more"}
          </span>
        </p>
      </div>
    </div>
  );
};
//
//

{
  /* <FaBeer /> */
}
export default Card;
