"use client";
import React from "react";
import CustomInput from "../components/common/CustomInput";
import { constants } from "../constant";

type Props = {};

const SignupForm = ({}: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col gap-4"
    >
      <CustomInput label="Full Name" />
      <CustomInput type="email" label="Email" />
      <CustomInput type="password" label="Password" />
      <input
        value="Submit"
        className={` flex items-center justify-center w-full border-2 border-[${constants.colors.primary}] text-white font-semibold text-xl b-[white] md:w-[500px] rounded-[5px]  py-2 cursor-pointer mt-6 outline-0`}
        type="submit"
      />
    </form>
  );
};

export default SignupForm;
