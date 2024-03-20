"use client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  icon: any;
  title: string;
};

export default function Tabs({ icon, title }: Props) {
  const pathname = usePathname();
  const route = pathname.replace("/", "");

  if (route !== "login") {
    return (
      <>
        {icon}
        <li>{title}</li>
      </>
    );
  }

  return null;
}
