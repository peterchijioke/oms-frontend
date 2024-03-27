import React from "react";
import Wrapper from "../Wrapper";
import { constants } from "@/app/constant";

type Props = {};

export default function page({}: Props) {
  return (
    <Wrapper>
      <div className={`h-full pt-24 w-full ${constants.colors.primary}`}>
        <div className="w-full grid md:grid-cols-3 gap-4 h-fit px-5 pb-8 md:px-20">
          <div className=" px-4 h-36 col-span-1 bg-white rounded-[5px]">
            hgfdghdgh
          </div>
          <div className="px-4 h-36 col-span-1 bg-white rounded-[5px]">
            hgfdghdgh
          </div>
          <div className=" px-4 col-span-1 h-36 bg-white rounded-[5px]">
            hgfdghdgh
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
