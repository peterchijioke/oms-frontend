import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainBody({ ...props }: Props) {
  return <div className="flex grow bg-[#333]" {...props} />;
}
