import React from 'react';

const PlaceList = () => {
  return (
    <div className="flex flex-col px-12">
      <div className="flex items-start  mt-4">
        <p className="text-[#767676] mr-[68px]">장소별 장소 1</p>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">농구장</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">치어룸1</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">치어룸2</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">치어룸3</button>
      </div>
      <div className="flex items-start  mt-4">
        <p className="text-[#767676] mr-[68px]">장소별 장소 2</p>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">학관 1층 외부</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">학관 1층 로비</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">학관 4층 로비</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">학관 5층 세미나실</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">구름다리 전시</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">종합관 1층 외부</button>
      </div>
      <div className="flex items-start  mt-4">
        <p className="text-[#767676] mr-[68px]">장소별 장소 3</p>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">본관 지하 연습실</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">소강당</button>
      </div>
      <div className="flex items-start  mt-4">
        <p className="text-[#767676] mr-[68px]">장소별 장소 4</p>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] my-1 px-2 ">경상관 지하 연습실</button>
      </div>
      <div className="flex items-start  mt-4">
        <p className="text-[#767676] mr-[68px]">장소별 장소 5</p>
      </div>
    </div>
  );
};

export default PlaceList;
