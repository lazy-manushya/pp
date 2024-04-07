"use client";

import styled from "@emotion/styled";

import { Body, Heading } from "@/components/Typography";
import Button from "@/components/input/Button";
import Icon from "@/components/misc/Icon";

export const StyledContainer = styled.div`
  padding: 0 1rem 2rem 1rem;
`;

export const StyledHeading = styled(Heading)`
  color: #0d0d12;
`;

export const StyledBody = styled(Body)`
  color: #818898;
`;

export const StyledButton = styled(Button)`
  gap: 0.4rem;
  padding: 1rem;
  min-height: 66px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background: #ffffff;
  border: 1px solid #efefef;
  color: #0d0d12;
  border-radius: 1rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const StyledIcon = styled(Icon)`
  filter: brightness(0) invert(56%) sepia(10%) saturate(498%) hue-rotate(184deg)
    brightness(93%) contrast(87%);
`;
