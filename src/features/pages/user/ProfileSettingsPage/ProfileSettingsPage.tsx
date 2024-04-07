"use client";

import React, { useMemo } from "react";

import MobilePrimaryLayout from "@/features/layouts/MobilePrimaryLayout";
import NavMenu from "@/components/navigation/NavMenu";
import { useAuth } from "@/services/Authentication";
import { selectUserData, useAppSelector } from "@/services/Store";

import {
  StyledAvatar,
  StyledEmail,
  StyledName,
  StyledPage,
  StyledUserDetailsContainer,
} from "./ProfileSettingsPage.styles";
import { NAV_ITEMS } from "./ProfileSettingsPage.config";

const ProfileSettingsPage: React.FC = () => {
  const { logout } = useAuth();
  const userData = useAppSelector(selectUserData)

  const navItems = useMemo(() => {
    const navItems = [...NAV_ITEMS];
    navItems[navItems.length - 1].onClick = logout;
    return navItems;
  }, [logout]);

  return (
    <MobilePrimaryLayout>
      <StyledPage>
        <StyledUserDetailsContainer>
          <StyledAvatar img={userData?.picture || userData?.owner_profile || ''}   />
          <StyledName>{userData?.given_name || ''} {userData?.family_name || ''}</StyledName>
          <StyledEmail>{userData?.email || ''}</StyledEmail>
        </StyledUserDetailsContainer>

        <NavMenu items={navItems} />
      </StyledPage>
    </MobilePrimaryLayout>
  );
};

export default ProfileSettingsPage;
