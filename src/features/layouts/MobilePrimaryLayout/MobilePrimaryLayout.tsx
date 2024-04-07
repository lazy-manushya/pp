"use client";

import React from "react";

import AppPrimaryTabBar from "@/features/app/AppPrimaryTabBar";
import Header from "@/features/app/Header";

import { StyledContainer, StyledMain } from "./MobilePrimaryLayout.styles";
import { IMobilePrimaryLayoutProps } from "./MobilePrimaryLayout.types";

const MobilePrimaryLayout: React.FC<IMobilePrimaryLayoutProps> = ({
  children,
}) => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <AppPrimaryTabBar />
    </StyledContainer>
  );
};

export default MobilePrimaryLayout;
