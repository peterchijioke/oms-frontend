"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../common/style.module.css";

type Props = {
  icon: any;
  title: string;
  href: string;
};

export default function Tabs({ icon: Icon, href, title }: Props) {
  const pathname = usePathname();
  const route = pathname.replace("/", "");
  if (pathname === href) {
    return null;
  }
  return (
    <Link href={href} className={`cursor-pointer flex  ${styles.nav_button}`}>
      <div className="flex items-center flex-row gap-1">
        {Icon}
        <li>{title}</li>
      </div>
    </Link>
  );
}
