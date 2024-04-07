"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import PageWithHeaderLayoutProps, {
  HeaderButton,
} from "@/features/layouts/PageWithHeaderLayout";
import Icon from "@/components/misc/Icon";
import ContractRejectForm, {
  ContractRejectFormRef,
} from "@/features/contracts/ContractRejectForm";

import { StyledPage } from "./ContractRejectPage.styles";

const ContractProposalPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const flowFormUrl = searchParams.get("flow");
  const [formRef, setFormRef] = useState({} as ContractRejectFormRef);
  const [userVerified, _] = useState(true);

  //-------------------

  const handleBackClick = useCallback(() => {
    if (formRef) {
      formRef.previousStep();
    }
  }, [formRef]);

  //-------------------

  useEffect(() => {
    if (flowFormUrl) {
      router.replace(pathname);
    }
  }, [router, flowFormUrl, searchParams, pathname]);

  //-------------------

  return (
    <PageWithHeaderLayoutProps
      headerProps={{
        titleProps: { children: "Reason for rejection" },
        backButtonProps: {
          onClick: handleBackClick,
        },
        appendContent: (
          <HeaderButton>
            <Icon isSrcRelative src="menu.svg" customSize="0.75rem" />
          </HeaderButton>
        ),
      }}
    >
      <StyledPage>
        <ContractRejectForm getFormRef={setFormRef} />
      </StyledPage>
    </PageWithHeaderLayoutProps>
  );
};

export default ContractProposalPage;
