import React from "react";

import ImageTitleContent from "@/components/data/ImageTitleContent";
import Icon from "@/components/misc/Icon";
import { SITE_PATHS } from "@/config/routing";

import {
  StyledBottomContainer,
  StyledButton,
  StyledButtonDark,
  StyledContainer,
  StyledTopContainer,
} from "./PaymentSuccessScreen.styles";

const PaymentSuccessScreen: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTopContainer>
        <ImageTitleContent
          title="Payment Received!"
          content={<>You have successfully funded Milestone 1.</>}
          image="/assets/images/pages/contracts/payment_success.svg"
        />
      </StyledTopContainer>

      <StyledBottomContainer>
        <StyledButton link="/contracts/1234/manage">
          View project <Icon isSrcRelative src="share.svg" size="xxs" />
        </StyledButton>

        <StyledButtonDark variant="ghost" link={SITE_PATHS.HOME_PAGE}>
          Go to chat
        </StyledButtonDark>
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default PaymentSuccessScreen;
