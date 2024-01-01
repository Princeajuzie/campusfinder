import React from "react";
import NavbarWithMegaMenu from "@/components/navbar/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarWithMegaMenu />
      {children}
    </>
  );
}
