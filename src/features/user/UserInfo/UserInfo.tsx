import React from "react";

import {
  StyledAvatar,
  StyledButton,
  StyledContainer,
  StyledMiddleSection,
  StyledUserName,
  StyledUserType,
} from "./UserInfo.styles";
import { IUserInfoProps } from "./UserInfo.types";
import RatingDisplay from "../RatingDisplay";
import Icon from "@/components/misc/Icon";

const UserInfo: React.FC<IUserInfoProps> = ({
  image,
  userType,
  userName,
  chatUrl,
  className,
  ratingDisplayProps,
}) => {
  return (
    <StyledContainer className={className}>
      <StyledAvatar img={image} />

      <StyledMiddleSection>
        <StyledUserType>{userType}</StyledUserType>
        <StyledUserName className="mt-2">{userName}</StyledUserName>
        {!!ratingDisplayProps && <RatingDisplay {...ratingDisplayProps}  className="mt-2"/>}
      </StyledMiddleSection>

      <StyledButton link={chatUrl}>
        <Icon isSrcRelative src="chat_gradient.svg" />
      </StyledButton>
    </StyledContainer>
  );
};

export default UserInfo;
