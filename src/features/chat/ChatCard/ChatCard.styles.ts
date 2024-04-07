"use client";

import { squareSizing } from "@/utils/css";
import styled from "@emotion/styled";
import Link from "next/link";

export const StyledUsername = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #1e75ff;
`;

export const StyledTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #242b42;
  margin-top: 0.15rem;
`;

export const StyledContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  color: #818898;
`;

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const StyledBottomContainer = styled(StyledTopContainer)`
  margin-top: 0.5rem;
`;

export const StyledLeftSection = styled.div`
  min-width: 32px;
  display: inline-flex;
  justify-content: center;
`;

export const StyledRightSection = styled.div`
  flex: 1;
  position: relative;
  padding-right: 2rem;
`;

export const StyledMessageCount = styled.div`
  ${squareSizing("24px")}
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #5f57ff !important;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10rem;
`;

export const StyledDate = styled.div`
  position: absolute;
  right: 0;
  top: -0.15rem;
  font-size: 12px;
  font-weight: 400;
  color: #7e8ca0;
`;

export const StyledCard = styled.div<{ $active: boolean }>`
  position: relative;
  padding: 1rem;
  border-radius: 1.25rem;

  ${({ $active }) =>
    $active
      ? `
        background: #5F57FF;

        div , p {
            color: #fff;
        }

        img {
            filter: brightness(0) invert(1)
        }
    `
      : `
        &:hover {
          background: #F6F8FA;
        }
      `}
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: 1;
`;
