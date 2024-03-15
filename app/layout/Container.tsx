import React from "react";

type Props = {};

export default function Container({ ...props }: Props) {
  return <div className="px-24" {...props} />;
}
