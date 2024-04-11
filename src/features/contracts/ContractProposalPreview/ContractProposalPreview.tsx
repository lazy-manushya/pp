import React, { useMemo } from "react";
import lodashGet from "lodash/get";

import Card from "@/components/data/Card";
import FilesInput, { FileObject } from "@/features/input/FilesInput";
import { formatDate } from "@/utils/date";
import UserInfo, { IUserInfoProps } from "@/features/user/UserInfo";
import { selectUserData, useAppSelector } from "@/services/Store";
import DetailsTable, { Item } from "@/components/data/DetailsTable";

import { IContractProposalPageProps } from "./ContractProposalPreview.types";
import {
  StyledContainer,
  StyledContractDate,
  StyledContractTitle,
  StyledContractValue,
  StyledDataLabel,
  StyledDataValue,
  StyledMainDetailsContainer,
  StyledSectionHeading,
} from "./ContractProposalPreview.styles";

const ContractProposalPreview: React.FC<IContractProposalPageProps> = ({
  contractDetails,
  className,
}) => {
  const loggedInUserData = useAppSelector(selectUserData);

  const {
    files,
    contract_type,
    start_date,
    end_date,
    title,
    total_value,
    description,
    milestones,
  } = contractDetails;

  const filesObjects: FileObject[] = useMemo(
    () => files.map((file) => ({ mediaFile: file } satisfies FileObject)),
    [files]
  );

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
      userType: "Payer",
      userName,
      chatUrl: "#",
      ratingDisplayProps: { rating: 4.4, reviewCount: 27 },
    } satisfies IUserInfoProps;
  }, [milestones, loggedInUserData]);

  return (
    <StyledContainer className={className}>
      <Card>
        <StyledMainDetailsContainer>
          <div>
            <StyledContractDate>{startDateFormatted}</StyledContractDate>
            <StyledContractTitle className="mt-3">{title}</StyledContractTitle>
          </div>

          <StyledContractValue>${total_value || 2500}</StyledContractValue>
        </StyledMainDetailsContainer>

        <StyledDataLabel className="mt-4">Description</StyledDataLabel>
        <StyledDataValue className="mt-2">{description}</StyledDataValue>
      </Card>

      {!!userDetails && (
        <Card className="mt-4">
          <UserInfo {...userDetails} />
        </Card>
      )}

      <Card className="mt-4">
        <StyledSectionHeading>Transaction details</StyledSectionHeading>

        <DetailsTable items={detailFields} />
      </Card>

      <FilesInput
        disabled
        className="mt-3 mx-3"
        value={filesObjects}
        label="Attached files"
      />
    </StyledContainer>
  );
};

export default ContractProposalPreview;
