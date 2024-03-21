import React, { useState } from "react";
import Container from "../layout/Container";
import DashboardNav from "../components/common/DashboardNav";
import MainBody from "./MainBody";
import SidebarSection from "./SideBarSection";

type Props = {
  children: React.ReactNode;
};

export default function page({ children }: Props) {
  return (
    <section className="flex w-full min-h-screen flex-row ">
      <DashboardNav />
      <SidebarSection />
      <MainBody>
        <Container>{children}</Container>
      </MainBody>
    </section>
  );
}
