import React from 'react';
import SimpleSlider from './SimpleSlider';

const Reservation = () => {
  return (
    <div className="w-full h-[500px] bg-white flex flex-col justify-between">
      <div className="w-full h-1/2">
        <SimpleSlider />
      </div>
      <div className="w-full mx-5">
        <p className="text-xl mb-[11px]">공간명</p>
        <p className="text-[#767676] mb-[7px]">위치</p>
        <p className="text-[#767676] mb-[7px]">수용인원</p>
        <p className="text-[#767676]">구비 시설</p>
      </div>
      <button className="h-[79px] w-full border-t-[1px] border-[#DBDBDB] hover:bg-[#002E66] hover:text-white">
        예약하기
      </button>
    </div>
  );
};

export default Reservation;
