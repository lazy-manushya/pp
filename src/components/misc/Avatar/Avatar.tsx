import React from "react";

import { StyledAvatar } from "./Avatar.styles";
import { IAvatarProps } from "./Avatar.types";

const Avatar: React.FC<IAvatarProps> = ({
  img,
  initials = "?",
  className,
  size = "md",
}) => {
  const hasImage = !!img;

  return (
    <StyledAvatar
      $size={size}
      $useImage={hasImage}
      className={className}
      style={{ backgroundImage: `url(${img})` }}
    >
      {!hasImage && initials}
    </StyledAvatar>
  );
};

export default Avatar;
