import React from "react";

import ImageTitleContent from "@/components/data/ImageTitleContent";
import Modal, { useModalState } from "@/components/misc/Modal";
import Icon from "@/components/misc/Icon";
import { SITE_PATHS } from "@/config/routing";

import {
  StyledBottomContainer,
  StyledButton,
  StyledButtonDark,
  StyledContainer,
  StyledTopContainer,
} from "./RejectSuccessScreen.styles";

const RejectSuccessScreen: React.FC = () => {
  const state = useModalState({ isOpen: true });

  return (
    <Modal state={state}>
      <StyledContainer>
        <StyledTopContainer>
          <ImageTitleContent
            title="Transaction rejected!"
            content={
              <>
                You&apos;ve rejected the transaction sent by <b>“Saber Ali”</b>
              </>
            }
            image="/assets/images/pages/contracts/contract_rejected.svg"
          />
        </StyledTopContainer>

        <StyledBottomContainer>
          <StyledButton link='#'>
            Message Saber <Icon isSrcRelative src="share.svg" size="xxs" />
          </StyledButton>

          <StyledButtonDark variant="ghost" link={SITE_PATHS.HOME_PAGE}>
            Back to home
          </StyledButtonDark>
        </StyledBottomContainer>
      </StyledContainer>
    </Modal>
  );
};

export default RejectSuccessScreen;
