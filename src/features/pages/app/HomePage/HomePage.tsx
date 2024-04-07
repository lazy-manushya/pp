"use client";
import React, { useMemo } from "react";

import Card from "@/components/data/Card";
import Icon from "@/components/misc/Icon";
import Button from "@/components/input/Button";
import MobilePrimaryLayout from "@/features/layouts/MobilePrimaryLayout";
import { selectUserData, useAppSelector } from "@/services/Store";

import {
  StyledContractDetailsCard,
  StyledContractsSection,
  StyledNoContent,
  StyledPage,
  StyledPrimaryHeading,
  StyledSecondaryHeading,
  StyledValue,
} from "./HomePage.styles";
import { useContractList } from "@/services/ContractsService";

const HomePage: React.FC = () => {
  const { data: contractList, hasNoData } = useContractList();
  const userData = useAppSelector(selectUserData);

  const balance = useMemo(() => {
    const balance = userData?.wallet?.balance;

    if (balance) return +balance;

    return 0;
  }, [userData?.wallet?.balance]);

  return (
    <MobilePrimaryLayout>
      <StyledPage>
        <Card>
          <StyledSecondaryHeading>Balance</StyledSecondaryHeading>
          <StyledValue>${balance}</StyledValue>
        </Card>

        <StyledContractsSection>
          <StyledPrimaryHeading>
            Active transactions
            <Button variant="ghost">
              <Icon src="/assets/images/icons/info.svg" size="xxs" />
            </Button>
          </StyledPrimaryHeading>

          {!hasNoData && (
            <div>
              {contractList.map((contract, i) =>
                i >= 3 ? null : (
                  <StyledContractDetailsCard
                    key={contract.id}
                    contract={contract}
                  />
                )
              )}
            </div>
          )}

          {hasNoData && (
            <StyledNoContent
              image="/assets/images/pages/contracts/no_contracts.svg"
              title={<>You don&apos;t have any transactions</>}
              content="Create a new transaction by selecting the Plus (+) icon below."
              className="mt-3"
            />
          )}
        </StyledContractsSection>
      </StyledPage>
    </MobilePrimaryLayout>
  );
};

export default HomePage;
