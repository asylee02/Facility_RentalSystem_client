import React from 'react';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const navigate = useNavigate();

  const handleClicked = () => {
    navigate('/');
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-2/3 aspect-[3/1] border-[#DBDBDB] border-[1px] bg-white flex flex-col items-center justify-between px-36 py-14">
        <p className="text-3xl font-bold">온라인 공간 예약 시스템 이용안내</p>
        <div className="w-full">
          <p className="font-bold">공간 예약 절차</p>
          <p className="text-[#767676]">
            홈페이지 접속 &gt 회원가입 및 로그인 &gt [공간예약] 버튼 클릭 &gt 이용 희망 공간 선택 &gt 예약 일자 및 시간
            선택 &gt 예약 시간/이용 목적 입력 &gt 예약 신청 &gt 담당자 승인 &gt 예약완료
          </p>
        </div>
        <div className="w-full">
          <p>유의사항</p>
          <p className="text-[#767676]">(**기존 명지대학교 대여 내규를 따름.)</p>
        </div>
        <button className="w-64 aspect-[5/1] text-white bg-[#002E66]" type="button" onClick={handleClicked}>
          공간 예약하기
        </button>
      </div>
    </div>
  );
};

export default Information;
