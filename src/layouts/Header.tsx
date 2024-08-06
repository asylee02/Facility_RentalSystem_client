import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-screen">
      <div className="h-[101px] bg-[#002E66] w-full flex items-center px-12 drop-shadow-lg">
        <img src="/images/mjuLogo.png" alt="logo" className="h-[54px]" />
      </div>
      <div className="h-[32px] w-full shadow-2xl bg-white flex items-center justify-end pr-20">
        <FaRegUserCircle className="text-2xl mr-3" />
        <Link to="signin">로그인</Link>
        <p className="mx-3">|</p>
        <Link to="signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Header;
