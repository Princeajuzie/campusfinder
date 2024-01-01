"use client";
import React, { Children } from "react";

import NavbarWithMegaMenu from "@/components/navbar/Navbar";
export default function layout({
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
