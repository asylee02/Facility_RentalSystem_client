import React from 'react';

const Header = () => {
  return (
    <div className="w-screen">
      <div className="h-[101px] bg-[#002E66] w-full flex items-center px-12 drop-shadow-lg">
        <img src="/images/mjuLogo.png" alt="logo" className="h-[54px]" />
      </div>
      <div className="h-[30px] w-full shadow-2xl">
        <p>로그인</p>
      </div>
    </div>
  );
};

export default Header;
