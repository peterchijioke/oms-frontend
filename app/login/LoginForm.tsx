"use client";
import React, { ChangeEventHandler, SetStateAction, useState } from "react";
import CustomInput from "../components/common/CustomInput";
import { constants } from "../constant";
import { useRouter } from "next/navigation";
import Toast from "../helpers/Toast";
import validator from "validator";

type Props = {};

export default ({}: Props) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate: any = useRouter();
  const [email, setEmail] = useState("");
  const handleChange =
    (setState: React.Dispatch<SetStateAction<string>>) => (event: any) => {
      const value = event.target.value ?? "";
      setState(value);
    };

  return (
    <form
      onSubmit={(e) => {
        setLoading(!loading);
        e.preventDefault();
        console.warn(
          validator.isEmail(email),
          password,
          "===========PASSWORD EMAIL"
        );
        if (validator.isEmail(email) && password) {
          setLoading(!loading);
          return navigate.push("/dashboard/home");
        }
        setLoading(!loading);
        return Toast("Please enter you details...!");
      }}
      className="flex flex-col gap-4"
    >
      <CustomInput
        onChange={handleChange(setEmail)}
        type="email"
        label="Email"
      />
      <CustomInput
        type="password"
        onChange={handleChange(setPassword)}
        label="Password"
      />
      <input
        value={loading ? "Loading...." : "Submit"}
        className={` flex items-center justify-center w-full border-2 border-[${constants.colors.primary}] text-white font-semibold text-xl b-[white] md:w-[500px] rounded-[5px]  py-2 cursor-pointer mt-6 outline-0`}
        type="submit"
      />
    </form>
  );
};
