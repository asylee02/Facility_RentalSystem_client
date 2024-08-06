import React from 'react';
import SingUp_Input from '../components/Input';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <p className="text-[28px] font-bold mt-20 mb-10">회원가입</p>
      <div className=" bg-white mb-20">
        <form action="" className="flex max-w-[520px] flex-col items-center px-12 py-10">
          <SingUp_Input type="text" placeholder="이름을 입력하세요" name="name" title="이름" />
          <SingUp_Input type="text" placeholder="이메일을 입력하세요" name="email" title="이메일" />
          <SingUp_Input type="password" placeholder="비밀번호를 입력하세요" name="password" title="비밀번호" />
          <SingUp_Input
            type="password"
            placeholder="비밀번호를 재입력하세요"
            name="password_checked"
            title="비밀번호 확인"
          />
          <SingUp_Input type="number" placeholder="학번을 입력하세요" name="student_id" title="학번" />
          <SingUp_Input type="text" placeholder="학과를 입력하세요" name="학과" title="학과" />
          <SingUp_Input type="number" placeholder="학년을 입력해주세요" name="grade" title="학년" />
          <SingUp_Input type="number" placeholder="휴대번호를 입력해주세요" name="phone_number" title="휴대폰 번호" />
          <button
            type="submit"
            className="w-full h-[56px] flex justify-center items-center text-white bg-[#002E66] my-5">
            완료
          </button>
          <button
            type="submit"
            className="w-full h-[56px] flex justify-center items-center border-[1px] border-[#DBDBDB]">
            취소
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
