"use client";

import styled from "@emotion/styled";

import Icon from "@/components/misc/Icon";
import { squareSizing } from "@/utils/css";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 56px;
  padding: 1rem;
  border-radius: 1rem;
  background: #fff;
  border: 1px solid #efefef;
  box-shadow: 0 4px 7px rgba(177, 177, 177, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledIcon = styled(Icon)`
  filter: brightness(0) invert(3%) sepia(4%) saturate(4466%) hue-rotate(201deg)
    brightness(96%) contrast(95%);
`;

export const StyledText = styled.div`
  flex: 1;
`;

export const StyledCount = styled.button`
  ${squareSizing("24px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  border-radius: 10rem;
  background: #5f57ff;
  color: #fff;
  border: none;
`;

export const StyledModelInner = styled.div`
  padding: 1rem;
`;

export const StyledModelText = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #1d1e25;
`;
