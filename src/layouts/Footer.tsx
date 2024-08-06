const Footer = () => {
  return (
    <div className="w-full bg-[#262626] text-white">
      <div className="h-[56px] w-full flex items-center px-20 justify-between text-[14px]">
        <div className="flex space-x-5 ">
          <p>개인정보처리방침</p>
          <p>|</p>
          <p>이메일 수신거부</p>
          <p>|</p>
          <p>대학정보공시</p>
          <p>|</p>
          <p>예결산공고</p>
          <p>|</p>
          <p>이용약관</p>
        </div>
        <div className="flex space-x-5 ">
          <p>단과 대학/학부</p>
          <p>|</p>
          <p>대학원 사이트</p>
          <p>|</p>
          <p>주요 부서 사이트</p>
          <p>|</p>
          <p>주요 사업 사이트</p>
          <p>|</p>
          <p>법인산하기관</p>
        </div>
      </div>
      <div className="h-[115px] w-full border-t-[1px] border-white text-[#C1C0C0] text-[20px] flex flex-col justify-center pl-20">
        <p>명지대학교 인문캠퍼스: (03674) 서울특별시 서대문구 거불골로 34 (TEL: 1577-0020)</p>
        <p>명지대학교 자연캠퍼스: (17058) 경기도 용인시 처인구 명지로 116 (TEL: 1577-0020)</p>
      </div>
    </div>
  );
};

export default Footer;
