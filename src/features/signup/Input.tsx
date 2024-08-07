import React from 'react';
import { UseFormRegister, useForm } from 'react-hook-form';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  title: string;
  register: UseFormRegister<any>;
}

const SingUp_Input = ({ type, placeholder, name, title, register }: Props) => {
  return (
    <div>
      <div className="flex w-full">
        <p className="text-red-500 mr-1">*</p>
        <p className="">{title}</p>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: '아이디는 필수입니다',
        })}
        className="border-b-[1px] border-[#DBDBDB] h-[56px] w-[400px] focus:outline-none mb-5"
      />
    </div>
  );
};

export default SingUp_Input;
