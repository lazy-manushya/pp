import React from "react";

import {
  StyledCard,
  StyledContent,
  StyledLeftSection,
  StyledBottomContainer,
  StyledRightSection,
  StyledTitle,
  StyledTopContainer,
  StyledUsername,
  StyledMessageCount,
  StyledDate,
  StyledLink,
} from "./ChatCard.styles";
import { IChatCardProps } from "./ChatCard.types";
import Avatar from "@/components/misc/Avatar";
import Icon from "@/components/misc/Icon";
import { SITE_PATHS } from "@/config/routing";

const ChatCard: React.FC<IChatCardProps> = ({
  avatarImage,
  username,
  title,
  content,
  hasAttachment,
  unreadMessageCount,
  lastMessageDate: _,
  className,
}) => {
  return (
    <StyledCard $active={!!unreadMessageCount} className={className}>
      <StyledLink href={`${SITE_PATHS.CHAT_PAGE}/1`} />

      <StyledTopContainer>
        <StyledLeftSection>
          <Avatar img={avatarImage} />
        </StyledLeftSection>

        <StyledRightSection>
          <StyledUsername>{username}</StyledUsername>
          <StyledTitle>{title}</StyledTitle>

          <StyledDate>11:20AM</StyledDate>
        </StyledRightSection>
      </StyledTopContainer>

      <StyledBottomContainer>
        <StyledLeftSection>
          {!!hasAttachment && (
            <Icon
              src="/assets/images/icons/clip.svg"
              alt="attachment"
              size="sm"
            />
          )}
        </StyledLeftSection>

        <StyledRightSection>
          <StyledContent>{content}</StyledContent>

          {!!unreadMessageCount && (
            <StyledMessageCount>{unreadMessageCount}</StyledMessageCount>
          )}
        </StyledRightSection>
      </StyledBottomContainer>
    </StyledCard>
  );
};

export default ChatCard;
