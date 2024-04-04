import React, { ReactNode } from "react";
import { constants } from "../constant";

type Props = {
  children: ReactNode;
};

export default function MainBody({ ...props }: Props) {
  return (
    <div className={`flex grow  bg-[${constants.colors.primary}]`} {...props} />
  );
}
