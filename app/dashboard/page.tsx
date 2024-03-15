import React from "react";
import Container from "../layout/Container";
import DashboardNav from "../components/common/DashboardNav";

type Props = {
  children: React.ReactNode;
};

export default function page({ children }: Props) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between ">
      <DashboardNav />
      <Container>{children}</Container>
    </section>
  );
}
