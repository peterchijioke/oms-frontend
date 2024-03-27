import React, { useState } from "react";
import Container from "../layout/Container";
import MainBody from "./MainBody";
import SidebarSection from "../components/SidebarSection";
import DashboardNav from "../components/common/DashboardNav";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <section className="flex w-full min-h-screen flex-row ">
      <DashboardNav />
      <SidebarSection />
      <MainBody>{children}</MainBody>
    </section>
  );
}
