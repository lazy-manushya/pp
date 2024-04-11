"use client";
import React, { useMemo, useState } from "react";
import lodashGet from "lodash/get";

import { selectUserData, useAppSelector } from "@/services/Store";
import UserInfo, { IUserInfoProps } from "@/features/user/UserInfo";
import PageWithHeaderLayoutProps from "@/features/layouts/PageWithHeaderLayout";
import Icon from "@/components/misc/Icon";
import { SITE_PATHS } from "@/config/routing";
import PopoverButton, {
  usePopoverState,
} from "@/components/misc/PopoverButton";
import Card from "@/components/data/Card";
import Tabs from "@/components/navigation/Tabs";
import { formatDate } from "@/utils/date";
import FilesInput, { FileObject } from "@/features/input/FilesInput";
import MilestonesDisplay from "@/features/contracts/MilestonesDisplay";
import Button from "@/components/input/Button";
import DetailsTable, { Item } from "@/components/data/DetailsTable";

import {
  StyledButtonsContainer,
  StyledContainer,
  StyledContentContainer, 
} from "./ContractManagementPage.styles";
import { IContractManagementPageProps } from "./ContractManagementPage.types";
import { CONTRACT_DETAILS } from "./ContractManagementPage.temp";
import StatusSection from "./components/StatusSection";
import ReviewSubmissions from "./components/ReviewSubmissions";

const ContractManagementPage: React.FC<IContractManagementPageProps> = () => {
  const menuState = usePopoverState();
  const loggedInUserData = useAppSelector(selectUserData);
  const [contractDetails] = useState(CONTRACT_DETAILS);
  const [activeTabId, setActiveTabId] = useState("details");

  const { milestones, files, contract_type, start_date, end_date, title } =
    contractDetails;

  const userDetails = useMemo(() => {
    if (!loggedInUserData || !milestones.length) return null;

    const participants = lodashGet(milestones, "[0].participants", []);
    const otherUser: any = participants.find(
      (p) => lodashGet(p, "user.id") !== loggedInUserData.id
    );

    const userName = [otherUser.user.given_name, otherUser.user.family_name]
      .filter(Boolean)
      .join(" ");

    return {
      image: otherUser.user.picture,
      userType: "Transactionor",
      userName,
      chatUrl: "#",
      ratingDisplayProps: { rating: 4.4, reviewCount: 27 },
    } satisfies IUserInfoProps;
  }, [milestones, loggedInUserData]);

  const startDateFormatted = useMemo(
    () => formatDate(start_date || new Date(2024, 3, 1)),
    [start_date]
  );
  const endDateFormatted = useMemo(
    () => formatDate(end_date || new Date(2024, 3, 3)),
    [end_date]
  );

  const detailFields = useMemo(() => {
    let fields: Item[] = [
      {
        label: "Project type",
        value: contract_type,
      },
      {
        label: "Issued date",
        value: startDateFormatted,
      },
      {
        label: "Due date",
        value: endDateFormatted,
      },
    ];

    return fields;
  }, [contract_type, startDateFormatted, endDateFormatted]);

  const filesObjects: FileObject[] = useMemo(
    () => files.map((file) => ({ mediaFile: file } satisfies FileObject)),
    [files]
  );

  return (
    <PageWithHeaderLayoutProps
      headerProps={{
        titleProps: { children: title },
        backButtonProps: {
          link: SITE_PATHS.CONTRACTS_PAGE,
        },
        appendContent: (
          <PopoverButton
            state={menuState}
            buttonProps={{
              variant: "ghost",
              children: (
                <Icon isSrcRelative src="menu.svg" customSize="1.25rem" />
              ),
              useAria: true,
            }}
            popoverProps={{
              placement: "bottom right",
              crossOffset: 16,
              children: (
                <Button variant="ghost" colorVariant="danger">
                  <Icon isSrcRelative src="pause.svg" customSize="0.75rem" />{" "}
                  Pause transaction
                </Button>
              ),
            }}
          />
        ),
      }}
    >
      <StyledContainer>
        <StyledContentContainer>
          <Card>
            <StatusSection contractDetails={contractDetails} />
          </Card>

          {!!userDetails && (
            <Card className="mt-3">
              <UserInfo {...userDetails} />
            </Card>
          )}

          <Card className="mt-3">
            <Tabs
              activeTabId={activeTabId}
              onChange={({ id }) => setActiveTabId(id)}
              tabs={[
                {
                  id: "overview",
                  title: "Overview",
                },
                {
                  id: "details",
                  title: "Details",
                },
              ]}
            />

   

            {activeTabId === "details" && <DetailsTable items={detailFields} />}

            {activeTabId === "overview" && (
              <MilestonesDisplay milestones={milestones as any[]} />
            )}
          </Card>

          <FilesInput
            disabled
            className="mt-3"
            value={filesObjects}
            label="Attached files"
            displayFileCount={0}
          />

          <ReviewSubmissions contractDetails={contractDetails} />
        </StyledContentContainer>

        <StyledButtonsContainer>
          <Button variant="secondary" link={SITE_PATHS.CHAT_PAGE}>
            Chat
          </Button>

          <Button>Mark as done</Button>
        </StyledButtonsContainer>
      </StyledContainer>
    </PageWithHeaderLayoutProps>
  );
};

export default ContractManagementPage;
