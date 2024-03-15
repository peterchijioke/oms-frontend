import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ ...props }: Props) {
  return <div className="px-24" {...props} />;
}
