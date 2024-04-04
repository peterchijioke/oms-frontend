"use client";
import { constants } from "@/app/constant";
import React, { useState } from "react";

type Props = {};

const DisplayChildInfo = ({}: Props) => {
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
    <div className="w-full items-center justify-center h-full px-11 py-4 outline-none flex flex-col gap-4 rounded-[1rem] bg-gray-300">
      <label
        className={`text-slate-700 text-xl font-bold font-[jost] uppercase`}
        htmlFor="created child"
      >
        Adopted Details
      </label>
      <div
        className={`h-32 w-32 bg-slate-500 rounded-[5px] flex items-center justify-center`}
      >
        Image
      </div>

      <div className="w-full h-fit gap-3 flex flex-col items-center">
        <label className="text-black font-bold font-[jost]" htmlFor="">
          Name:{" "}
          <label className="text-black font-semibold" htmlFor="">
            Michael
          </label>
        </label>
        <label className="text-black font-bold font-[jost]" htmlFor="">
          Age:{" "}
          <label className="text-black font-semibold" htmlFor="">
            20
          </label>
        </label>
        <label className="text-black font-bold font-[jost]" htmlFor="">
          Enrolled:{" "}
          <label className="text-black font-semibold" htmlFor="">
            20.4.2020
          </label>
        </label>
      </div>
    </div>
  );
};

export default DisplayChildInfo;
