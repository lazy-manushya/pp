import React from "react";
import Image from "next/image";

import { ILogoProps } from "./Logo.types";

const Logo: React.FC<ILogoProps> = ({ className }) => {
  return (
    <Image
      priority
      src="/assets/images/branding/logo.svg"
      alt="Paypipe logo"
      width={104}
      height={24}
      className={className}
    />
  );
};

export default Logo;
