import React, { useCallback } from "react";

import ImageTitleContent from "@/components/data/ImageTitleContent";
import Modal, { useModalState } from "@/components/misc/Modal";
import Icon from "@/components/misc/Icon";
import { SITE_PATHS } from "@/config/routing";
import Share from "@/services/Share";

import {
  StyledBottomContainer,
  StyledButton,
  StyledButtonDark,
  StyledContainer,
  StyledTopContainer,
} from "./SuccessScreen.styles";

const SuccessScreen: React.FC = () => {
  const state = useModalState({ isOpen: true });

  const share = useCallback(() => {
    Share.share({
      title: "Paypipe",
      text: "",
      url: "https://PayPipe.me/transaction/9ae1e4d7-6a52-4def-83c6-33e6001bf682",
    });
  }, []);

  return (
    <Modal state={state}>
      <StyledContainer>
        <StyledTopContainer>
          <ImageTitleContent
            title="Transaction created!"
            content={
              <>
                Your transaction has been successfully created.
                <br />
                Share this transaction with your client by selecting Share
                below.
              </>
            }
            image="/assets/images/pages/contracts/contract_created.svg"
          />
        </StyledTopContainer>

        <StyledBottomContainer>
          <StyledButton onClick={share}>
            Share <Icon isSrcRelative src="share.svg" size="xxs" />
          </StyledButton>

          <StyledButtonDark variant="ghost" link={SITE_PATHS.HOME_PAGE}>
            Back to home
          </StyledButtonDark>
        </StyledBottomContainer>
      </StyledContainer>
    </Modal>
  );
};

export default SuccessScreen;
