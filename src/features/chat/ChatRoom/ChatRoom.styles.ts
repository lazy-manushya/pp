"use client";

import TextField from "@/components/input/TextField";
import Icon from "@/components/misc/Icon";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// =======================

export const StyledTopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #f6f8fa;
`;

export const StyledTopSectionContent = styled.div`
  flex: 1;
`;

export const StyledRoomTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: #1d1e25;
`;

export const StyledRoomTitleSecondary = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #808d9e;
  margin-top: 0.25rem;
`;

// =======================

export const StyledMessageSection = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const StyledInputSection = styled.div`
  padding: 1rem;
  background: #fff;
  box-shadow: 0px 0px 108px 0px #0000000a;
`;

export const StyledInput = styled(TextField)`
  background: #fff;
  height: fit-content;
  min-height: 3.5rem;
  max-height: 7rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const StyledMessageBubble = styled.div<{ $isCurrentUser: boolean }>`
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  width: fit-content;
  max-width: calc(100% - 120px);
  margin-bottom: 0.15rem;

  ${({ $isCurrentUser }) =>
    $isCurrentUser
      ? `
      margin-left: auto;
      background: #5F57FF;
      color: #fff;
      border-bottom-right-radius: 0;
      padding-bottom: 2.25rem;

      &:last-of-type:not(:first-of-type) {
        border-top-right-radius: 0;
      }
    `
      : `
      background: #eceff3;
      color: #0D0D12;
      border-top-left-radius: 0;

      &:first-of-type:not(:last-of-type)  {
        border-bottom-left-radius: 0;
      }
  `}
`;

export const StyledMessageText = styled.p`
  margin: 0;
`;

export const StyledMessageGroup = styled.div<{ $isCurrentUser: boolean }>`
  margin-bottom: 1rem;
`;

export const StyledMessagesContainer = styled.div<{ $isCurrentUser: boolean }>`

`;

export const StyledDate = styled.div<{ $isCurrentUser: boolean }>`
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  color: #a4acb9;
  margin-top: 0.5rem;
  text-align: ${({ $isCurrentUser }) => ($isCurrentUser ? "right" : "left")};
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
`;
