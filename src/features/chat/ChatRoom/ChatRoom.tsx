"use client";

import React, { useMemo } from "react";

import Button from "@/components/input/Button";
import Icon from "@/components/misc/Icon";

import {
  StyledContainer,
  StyledDate,
  StyledIcon,
  StyledInput,
  StyledInputSection,
  StyledMessageBubble,
  StyledMessageGroup,
  StyledMessageSection,
  StyledMessageText,
  StyledMessagesContainer,
  StyledRoomTitle,
  StyledRoomTitleSecondary,
  StyledTopSection,
  StyledTopSectionContent,
} from "./ChatRoom.styles";
import { IChatRoomProps, Message, ReadStatus, UserID } from "./ChatRoom.types";
import Avatar from "@/components/misc/Avatar";

const ChatRoom: React.FC<IChatRoomProps> = ({
  currentUserId,
  messages,
  users,
  className,
}) => {
  const messageGroups = useMemo(() => {
    const groups: {
      messages: Message[];
      date: Date;
    }[] = [];

    let lastUserId: UserID;
    let lastGroupMessages: Message[] = [];

    messages.forEach((message) => {
      if (lastUserId) {
        if (lastUserId === message.userId) {
          lastGroupMessages.push(message);
        } else {
          if (lastGroupMessages.length) {
            groups.push({
              messages: lastGroupMessages,
              date: message.date,
            });
            lastGroupMessages = [message];
          }
        }
      } else {
        lastGroupMessages = [message];
      }

      lastUserId = message.userId;
    });

    if (lastGroupMessages.length) {
      groups.push({
        messages: lastGroupMessages,
        date: lastGroupMessages[0].date,
      });
    }

    return groups;
  }, [messages]);

  const usersExceptCurrent = useMemo(
    () => users.filter((user) => user.id !== currentUserId),
    [users, currentUserId]
  );
  const displayUserDetails = usersExceptCurrent[0];

  return (
    <StyledContainer className={className}>
      <StyledTopSection>
        <Avatar img={displayUserDetails?.image} size="lg" />
        <StyledTopSectionContent>
          <StyledRoomTitle>{displayUserDetails?.name}</StyledRoomTitle>
          <StyledRoomTitleSecondary>
            {displayUserDetails?.email}
          </StyledRoomTitleSecondary>
        </StyledTopSectionContent>
      </StyledTopSection>

      <StyledMessageSection>
        {messageGroups.map(({ messages }, i) => {
          const isCurrentUser = messages[0].userId === currentUserId;
          return (
            <StyledMessageGroup $isCurrentUser={isCurrentUser} key={i}>     
              <StyledMessagesContainer $isCurrentUser={isCurrentUser}>
                {messages.map((message, j) => {
                  const icon =
                    message.readStatus === ReadStatus.Read
                      ? "/assets/images/icons/double_tick.svg"
                      : "/assets/images/icons/tick.svg";
                  const iconAlt =
                    message.readStatus === ReadStatus.Read ? "Read" : "Sent";

                  return (
                    <StyledMessageBubble $isCurrentUser={isCurrentUser} key={j}>
                      <StyledMessageText>{message.content}</StyledMessageText>

                      {isCurrentUser && (
                        <StyledIcon src={icon} alt={iconAlt} size="xs" />
                      )}
                    </StyledMessageBubble>
                  );
                })}
              </StyledMessagesContainer>

              <StyledDate $isCurrentUser={isCurrentUser}>16:08</StyledDate>
            </StyledMessageGroup>
          );
        })}
      </StyledMessageSection>

      <StyledInputSection>
        <StyledInput
          textArea
          appendContent={
            <>
              <Button variant="ghost">
                <Icon src="/assets/images/icons/clip_tilted.svg" />
              </Button>
              <Button variant="ghost">
                <Icon src="/assets/images/icons/send.svg" />
              </Button>
            </>
          }
        />
      </StyledInputSection>
    </StyledContainer>
  );
};

export default ChatRoom;
