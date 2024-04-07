"use client";

import styled from "@emotion/styled";
import Link from "next/link";

import Button from "@/components/input/Button";
import Icon from "@/components/misc/Icon";
import { squareSizing } from "@/utils/css";

export const StyledNav = styled.div``;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: #ffffff;

  li + li {
    border-top: 1px solid #f8f8fb;
  }
`;

export const StyledIconContainer = styled.div`
  ${squareSizing("40px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: #f8fafb;
`;

export const StyledTitle = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 0.75rem;
  width: 100%;
  text-decoration: none;
  color: #0d0d12;
`;

export const StyledButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 0.75rem;
  width: 100%;
  text-decoration: none;
  color: #0d0d12;
`;
