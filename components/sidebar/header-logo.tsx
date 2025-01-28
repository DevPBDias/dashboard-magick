"use client";
import Image from "next/image";
import logoFull from "@/assets/logos/Logo_Name.png";
import logoMinor from "@/assets/logos/Logo_Icon.png";
import { useModalContext } from "@/context/modal-provider";

const HeaderLogo = () => {
  const { triggerLogo } = useModalContext();

  return (
    <picture>
      {!triggerLogo ? (
        <Image src={logoFull} alt="Logo name" />
      ) : (
        <Image src={logoMinor} alt="Logo ICON" />
      )}
    </picture>
  );
};

export default HeaderLogo;
