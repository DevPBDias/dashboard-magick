import Image, { StaticImageData } from "next/image";
import React from "react";

interface LogoProps {
  logo: StaticImageData;
}

const HeaderLogo = ({ logo }: LogoProps) => {
  return (
    <picture>
      <Image src={logo} alt="Logo" />
    </picture>
  );
};

export default HeaderLogo;
