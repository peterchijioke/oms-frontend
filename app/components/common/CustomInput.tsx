import React, { HtmlHTMLAttributes } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const CustomInput: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <div className="w-full rounded shadow-md flex flex-col gap-2">
      <label className="font-semibold text-white" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        placeholder="Enter your text here..."
        className="b-[white] h-12 w-full md:w-[500px] rounded-[10px] p-5 outline-0"
        {...props}
      />
    </div>
  );
};

export default CustomInput;
