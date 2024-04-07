"use client";

import styled from "@emotion/styled";
import Button from "@/components/input/Button";
import Icon from "@/components/misc/Icon";

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;

  outline: none;
  font-size: 16px;
  background: #f6f8fa;
  border: 1.5px solid #f1f0f3;
  border-radius: 0.75rem;
  padding: 0.75rem 1.25rem;
  color: #555;
  outline: none;
  overflow: hidden;
  height: 48px;
  width: 100%;

  & > div {
    flex: 1;
    text-align: start;
  }
`;

export const StyledOptionContainer = styled.div`
  padding: 0 1rem;
`;

export const StyledOptionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;

  outline: none;
  font-size: 16px;
  background: #fff;
  border: none;
  padding: 1.5rem 0;
  color: #555;
  outline: none;
  overflow: hidden;
  height: 48px;
  width: 100%;
  border-radius: 0;

  & > div {
    flex: 1;
    text-align: start;
  }

  & + & {
    border-top: 1px solid #efefef;
  }
`;

export const StyledIcon = styled(Icon)`
  filter: brightness(0) invert(3%) sepia(3%) saturate(6948%) hue-rotate(201deg)
    brightness(93%) contrast(95%);
`;

export const StyledHeading = styled.div`
  padding: 0 1rem;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
