import React from "react";

import { Body, Display } from "@/components/Typography";
import { useAuth } from "@/services/Authentication";

import {
  StyledBottomSection,
  StyledButton,
  StyledContentSection,
  StyledInputContainer,
  StyledPage,
  StyledTopSection,
} from "./OnboardingPage.styles";

const OnboardingPage: React.FC = () => {
  const { login, register } = useAuth();

  return (
    <StyledPage>
      <StyledTopSection />

      <StyledBottomSection>
        <StyledContentSection>
          <Display size="md">Track your mood and reflect on your day</Display>
          <Body size="lg">
            Get an overview of how you are performing and motivate yourself to
            achieve even moew.
          </Body>
        </StyledContentSection>

        <StyledInputContainer>
          <StyledButton className="w-100" onClick={login}>
            Log in
          </StyledButton>
          <StyledButton className="w-100" onClick={register} variant="ghost">
            Register
          </StyledButton>
        </StyledInputContainer>
      </StyledBottomSection>
    </StyledPage>
  );
};

export default OnboardingPage;
