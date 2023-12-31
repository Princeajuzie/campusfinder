"use client";
import React, { Children } from "react";

import NavbarWithMegaMenu from "@/components/navbar/Navbar";
export default function layout({ Children }: { Children: React.ReactNode }) {
  return (
    <>
      <NavbarWithMegaMenu />

      {Children}
    </>
  );
}
