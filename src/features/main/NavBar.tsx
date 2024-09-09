import React, { useState } from 'react';
import LectureList from './LectureList';
import PlaceList from './PlaceList';
import TimeList from './TimeList';
import DeptList from './DeptList';

const NavBar = () => {
  const [option, setOption] = useState<string>('lecture');
  const handleNav = (select: string) => {
    setOption(select);
  };

  const handleOption = () => {
    if (option === 'lecture') {
      return <LectureList />;
    }
    if (option === 'place') {
      return <PlaceList />;
    }
    if (option === 'time') {
      return <TimeList />;
    }
    if (option === 'dept') {
      return <DeptList />;
    }
  };

  return (
    <div className="w-2/3 h-[350px] bg-white">
      <nav className="w-[404px] mx-[50px]  flex justify-between my-[20px]">
        <button
          onClick={() => handleNav('lecture')}
          className={`${option === 'lecture' ? `text-[#002E66] text-xl font-bold` : `text-[#767676] text-xl`} hover:text-[#002E66] hover:font-bold`}>
          강의실별
        </button>
        <button
          onClick={() => handleNav('place')}
          className={`${option === 'place' ? `text-[#002E66] text-xl font-bold` : `text-[#767676] text-xl`} hover:text-[#002E66] hover:font-bold`}>
          장소별
        </button>
        <button
          onClick={() => handleNav('time')}
          className={`${option === 'time' ? `text-[#002E66] text-xl font-bold` : `text-[#767676] text-xl`} hover:text-[#002E66] hover:font-bold`}>
          시간별
        </button>
        <button
          onClick={() => handleNav('dept')}
          className={`${option === 'dept' ? `text-[#002E66] text-xl font-bold` : `text-[#767676] text-xl`} hover:text-[#002E66] hover:font-bold`}>
          학과별
        </button>
      </nav>
      <hr className="border-b-[1px] border-[#DBDBDB] my-2" />
      {handleOption()}
    </div>
  );
};

export default NavBar;
