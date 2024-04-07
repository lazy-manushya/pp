"use client";

import Button from "@/components/input/Button";
import styled from "@emotion/styled";
import Image from "next/image";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const StyledIllustration = styled(Image)``;

export const StyledTopSection = styled.div`
  flex: 1 50%;
  background: #f8f6fa;
  background-image: url("/assets/images/pages/onboarding/illustration.svg");
  background-repeat: no-repeat;
  background-position: calc(50% + 1rem) 100%;
`;

export const StyledBottomSection = styled.div`
  flex: 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const StyledContentSection = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;
  font-weight: 600;
  max-width: 380px;
`;
