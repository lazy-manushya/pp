"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import PageWithHeaderLayoutProps, {
  HeaderButton,
} from "@/features/layouts/PageWithHeaderLayout";
import Icon from "@/components/misc/Icon";
import ContractRejectForm, {
  ContractRejectFormRef,
} from "@/features/contracts/ContractRejectForm";
import { SITE_PATHS } from "@/config/routing";

import { StyledPage } from "./ContractRejectPage.styles";

const ContractRejectPage: React.FC = () => {
  const params = useParams<{ contract_id: string }>();
  const contractIdFromUrl = params.contract_id;
  const router = useRouter();
  const [formRef, setFormRef] = useState({} as ContractRejectFormRef);

  //-------------------

  const handleBackClick = useCallback(() => {
    if (formRef) {
      formRef.previousStep();
    }
  }, [formRef]);

  //-------------------

  useEffect(() => {
    if (!contractIdFromUrl) {
      router.replace(SITE_PATHS.CONTRACTS_PAGE);
    }
  }, [router, contractIdFromUrl]);

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
        <ContractRejectForm
          contractId={contractIdFromUrl}
          getFormRef={setFormRef}
        />
      </StyledPage>
    </PageWithHeaderLayoutProps>
  );
};

export default ContractRejectPage;
