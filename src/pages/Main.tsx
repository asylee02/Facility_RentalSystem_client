import NavBar from '../features/main/NavBar';
import Reservation from '../features/main/Reservation';

const Main = () => {
  return (
    <div className="w-screen h-full flex flex-col items-center">
      <p className="text-3xl font-bold mt-[90px] mb-[54px]">인문캠퍼스 공간 예약하기</p>
      <NavBar />

      <div className="w-2/3">
        <p className="text-2xl mt-[41px] mb-[15px]">대여 가능한 공간</p>
        <div className="w-full grid grid-cols-3 gap-[40px] mb-[170px]">
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
          <Reservation />
        </div>
      </div>
    </div>
  );
};

export default Main;
