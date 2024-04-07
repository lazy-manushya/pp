"use client";

import styled from "@emotion/styled";

import Avatar from "@/components/misc/Avatar";
import Button from "@/components/input/Button";
import { squareSizing } from "@/utils/css";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const StyledAvatar = styled(Avatar)`
  --size: 60px;
  border-radius: 1rem;
`;

export const StyledMiddleSection = styled.div`
  flex: 1;
`;

export const StyledUserType = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #818898;
`;

export const StyledUserName = styled.div`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #0d0d12;
`;

export const StyledButton = styled(Button)`
  ${squareSizing("48px")};
  border-radius: 10rem;
`;
