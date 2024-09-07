import React, { useState } from 'react';

const NavBar = () => {
  const [option, setOption] = useState<string>('lecture');
  const handleNav = (select: string) => {
    setOption(select);
  };
  return (
    <div className="w-2/3 h-[237px] bg-white">
      <nav className="w-[404px] mx-[50px]  flex justify-between mt-[20px]">
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
      <div className="mx-5">
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">경상관 지하 연습실</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">구름다리 전시</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">농구장</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">본관 지하 연습실</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">소강당</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">종합관 1층 외부</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">치어룸1</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">치어룸2</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">치어룸3</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">학관 1층 외부</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">학관 1층 로비</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">학관 4층 로비</button>
        <button className="bg-[#D9D9D9] text-sm rounded-md mr-[20px] px-2 my-2">학관 5층 세미나실</button>
      </div>
    </div>
  );
};

export default NavBar;
