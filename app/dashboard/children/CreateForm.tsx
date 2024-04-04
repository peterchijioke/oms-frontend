"use client";
import { constants } from "@/app/constant";
import React, { useState } from "react";

type Props = {};

export default ({}: Props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: any) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null); // Clear previous selection if not an image
      console.warn("Please select a valid image file.");
    }
  };
  return (
    <form className="w-full h-full px-11 py-4 outline-none flex flex-col gap-4 rounded-[1rem] bg-gray-300">
      <label
        className={`text-slate-700 font-bold font-[jost] uppercase`}
        htmlFor="created child"
      >
        Enroll a Child
      </label>
      <input
        placeholder="Child's Name"
        type="text"
        className="w-full py-3 outline-none rounded-[3px] bg-white px-5 text-xs"
      />
      <input
        placeholder="Child's age"
        type="text"
        className="w-full py-3 outline-none rounded-[3px] bg-white px-5 text-xs"
      />
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <input
          placeholder="Child's Name"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="py-3 w-fit outline-none rounded-[3px] bg-white px-5 text-xs"
        />
        <div className="flex flex-grow w-fit h-32 overflow-hidden  rounded-[5px]">
          {selectedImage && (
            <img className="h-full" src={selectedImage} alt="Selected Image" />
          )}
        </div>
      </div>
      <input
        value="Submit"
        type="button"
        className={`w-full mt-8 cursor-pointer text-lg py-[1rem] font-bold outline-none text-white bg-[${constants.colors.primary}] rounded-[1rem] px-[1rem] text-xs`}
      />
    </form>
  );
};
