import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ ...props }: Props) {
  return <div className="pb-8 px-5 lg:px-24 pt-8" {...props} />;
}
