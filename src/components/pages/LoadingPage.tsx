"use client"

import Image from "next/image"
import Logo from "@/assets/logo.svg"

import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  margin: "0 auto"
};

export default function LoadingPage() {
  return (
    <div className="w-full h-screen flex gap-2 flex-col items-center justify-center">
      <Image src={Logo} alt="Logo Capacity" width={200} height={200} />
      <ClipLoader
        color={"#ff6900"}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loading-spinner"
      />
    </div>
  )
}
