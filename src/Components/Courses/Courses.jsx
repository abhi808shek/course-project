import React from 'react'
import Card from './CourseCard/Card';

const Courses = ({apiData}) => {
const getCourses=()=>{
  const newArray = [];
  Object.values(apiData).forEach((data)=>{
    data.forEach((elem)=>{newArray.push(elem)})
  })
  return newArray;
}
console.log(getCourses());
  return (
    <>
    <div className='mx-auto bg-[#4E6E81] w-[80%] flex flex-wrap justify-evenly'>
      {getCourses().map((elem)=>(<Card data={elem} key={elem.id}/>))}
    <span className='w-[32%]'></span>
    <span className='w-[32%]'></span>
    </div>
    </>
  )
}

export default Courses;
