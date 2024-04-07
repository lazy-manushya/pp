"use client";

import React, { useState } from "react";

import Card from "@/components/data/Card";
import MobilePrimaryLayout from "@/features/layouts/MobilePrimaryLayout";
import Tabs from "@/components/navigation/Tabs";
import { useContractList } from "@/services/ContractsService";

import {
  StyledContractDetailsCard,
  StyledInputsContainer,
  StyledNoContent,
  StyledPage,
} from "./ContractsPage.styles";

const ContractsPage: React.FC = () => {
  const { data: contractList, hasNoData: hasNoData_ } = useContractList();
  const [activeTabId, setActiveTabId] = useState("Active");

  const hasNoData = hasNoData_ || activeTabId === "Archive";

  return (
    <MobilePrimaryLayout>
      <StyledPage>
        <Card>
          <StyledInputsContainer>
          <Tabs
            activeTabId={activeTabId}
            onChange={({ id }) => setActiveTabId(id)}
            tabs={[
              {
                id: "Active",
                title: "Active",
              },
              {
                id: "Archive",
                title: "Archive",
              },
            ]}
          /></StyledInputsContainer>

          {!hasNoData && (
            <div className="mt-4">
              {contractList.map((contract) => (
                <StyledContractDetailsCard
                  key={contract.id}
                  contract={contract}
                />
              ))}
            </div>
          )}
        </Card>

        {hasNoData && (
          <StyledNoContent
            image="/assets/images/pages/contracts/no_contracts.svg"
            title={<>You don&apos;t have any contracts</>}
            content="Start a chat with any of your contacts or others to have a conversation."
            className="mt-5"
          />
        )}
      </StyledPage>
    </MobilePrimaryLayout>
  );
};

export default ContractsPage;
