"use client";

import styled from "@emotion/styled";

import ChatCard from "@/features/chat/ChatCard";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 100%;
`;

export const StyledChatList = styled.div`
  flex: 1;
  overflow: auto;
  margin-right: -1rem;
  padding-right: 1rem;

  hr {
    opacity: 0.25;
    margin-block: 1rem;
  }
`;

export const StyledChatCard = styled(ChatCard)`
  margin-bottom: 1rem;
`;
