"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import PageWithHeaderLayoutProps, {
  HeaderButton,
} from "@/features/layouts/PageWithHeaderLayout";
import VerifyUserForm, {
  VerifyUserFormRef,
} from "@/features/user/VerifyUserForm";
import Icon from "@/components/misc/Icon";
import Button from "@/components/input/Button";
import Modal, { useModalState } from "@/components/misc/Modal";

import {
  StyledPage,
  StyledProposalButtonsContainer,
  StyledProposalControls,
  StyledProposalPreview,
  StyledProposalStep,
  StyledSmallText,
} from "./ContractProposalPage.styles";
import { CONTRACT_DETAILS } from "./ContractProposalPage.temp";
import PaymentSuccessScreen from "./components/screens/PaymentSuccessScreen";

const ContractProposalPage: React.FC = () => {
  const paymentSucccessModalstate = useModalState();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const flowFormUrl = searchParams.get("flow");
  const [verifyUserFormRef, setVerifyUserFormRef] = useState(
    {} as VerifyUserFormRef
  );
  const [userVerified] = useState(true);
  const [contractDetails] = useState(CONTRACT_DETAILS);

  //-------------------

  const handleBackClick = useCallback(() => {
    if (!userVerified && verifyUserFormRef) {
      verifyUserFormRef.previousStep();
    }
  }, [userVerified, verifyUserFormRef]);

  //-------------------

  useEffect(() => {
    if (flowFormUrl) {
      router.replace(pathname);
    }
  }, [router, flowFormUrl, searchParams, pathname]);

  //-------------------

  const rejectUrl = `/contracts/${contractDetails.id}/reject`;

  return (
    <PageWithHeaderLayoutProps
      headerProps={{
        titleProps: { children: userVerified ? "Review proposal" : "" },
        backButtonProps: {
          onClick: handleBackClick,
          children: userVerified ? (
            <Icon isSrcRelative src="cross.svg" customSize="0.75rem" />
          ) : null,
        },
        appendContent: userVerified ? (
          <HeaderButton>
            <Icon isSrcRelative src="menu.svg" customSize="0.75rem" />
          </HeaderButton>
        ) : null,
      }}
    >
      <StyledPage>
        <Modal state={paymentSucccessModalstate}>
          <PaymentSuccessScreen />
        </Modal>

        {userVerified ? (
          <StyledProposalStep>
            <StyledProposalPreview contractDetails={contractDetails} />

            <StyledProposalControls>
              <StyledSmallText className="mb-2">
                By selecting Continue you agree to accept our{" "}
                <Link href="#">Terms of Use</Link> and{" "}
                <Link href="#">Privacy Policy</Link>
              </StyledSmallText>

              <StyledProposalButtonsContainer>
                <Button
                  variant="secondary"
                  colorVariant="danger"
                  link={rejectUrl}
                >
                  Reject
                </Button>

                <Button onClick={paymentSucccessModalstate.open}>Accept</Button>
              </StyledProposalButtonsContainer>
            </StyledProposalControls>
          </StyledProposalStep>
        ) : (
          <VerifyUserForm getFormRef={setVerifyUserFormRef} />
        )}
      </StyledPage>
    </PageWithHeaderLayoutProps>
  );
};

export default ContractProposalPage;
