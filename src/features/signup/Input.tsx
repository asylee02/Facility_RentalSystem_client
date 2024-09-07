import React from 'react';
import { FieldErrors, UseFormRegister, ValidationRule, useForm } from 'react-hook-form';
import errorMessage from '../../utils/errorMessage';

interface FormValue {
  name: string;
  email: string;
  password: string;
  major: string;
  grade: string;
  password_checked: string;
  phone_number: string;
  student_id: string;
}

interface Props {
  type: string;
  placeholder: string;
  name: keyof FormValue;
  title: string;
  register: UseFormRegister<any>;
  max?: number;
  min?: number;
  pattern?: ValidationRule<RegExp> | undefined;
  error?: FieldErrors<FormValue>;
}

const SingUp_Input = ({ type, placeholder, name, title, register, max, min, pattern, error }: Props) => {
  // error && console.log(error);
  error && console.log(error);
  error?.name && console.log(error.name!.type);
  // error && error[name] && console.log(errorMessage(error[name]!.type));
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
          required: true,
          maxLength: max,
          minLength: min,
          pattern: pattern,
        })}
        className="border-b-[1px] border-[#DBDBDB] h-[56px] w-[400px] focus:outline-none mb-5"
      />
      {/* <div>{error?.name && errorMessage(error[name].type)}</div> */}
    </div>
  );
};

export default SingUp_Input;
