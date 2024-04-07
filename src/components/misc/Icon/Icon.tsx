import React from "react";

import { StyledIcon } from "./Icon.styles";
import { IIconProps } from "./Icon.types";
import { DEFAULT_SIZE, COLOR_CONFIG } from "./Icon.config";

const Icon: React.FC<IIconProps> = ({
  src,
  alt = "",
  className,
  size = DEFAULT_SIZE,
  colorVariant,
  isSrcRelative = false,
  customSize = "",
}) => {
  return (
    <StyledIcon
      $size={size}
      src={isSrcRelative ? `/assets/images/icons/${src}` : src}
      alt={alt}
      className={className}
      style={colorVariant ? COLOR_CONFIG[colorVariant].style : {}}
      $customSize={customSize}
    />
  );
};

export default Icon;
