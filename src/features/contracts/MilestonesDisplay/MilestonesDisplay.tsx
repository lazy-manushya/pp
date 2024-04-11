import React from "react";

import { formatDate } from "@/utils/date";

import {
  StyledContainer,
  StyledInputsContainer,
  StyledLabel,
  StyledFieldContainer,
  StyledNameContainer,
  StyledValue,
  StyledValueBold,
  StyledValueLight,
  StyledTopContainer,
  StyledFieldBGContainer,
} from "./MilestonesDisplay.styles";
import { IMilestoneInputProps } from "./MilestonesDisplay.types";

const MilestonesDisplay: React.FC<IMilestoneInputProps> = ({
  milestones = [],
  className,
}) => {
  return (
    <StyledContainer className={className}>
      {milestones.map(
        ({ name, description, value, start_date, end_date }, i) => {
          const startDate = start_date ? formatDate(start_date) : "";
          const endDate = end_date ? formatDate(end_date) : "";

          return (
            <StyledInputsContainer $showCounter key={`${name}_${i}`}>
              <StyledTopContainer>
                <StyledNameContainer>
                  <StyledLabel>Milestone name</StyledLabel>
                  <StyledValue>{name}</StyledValue>
                </StyledNameContainer>

                <StyledValueBold>${value}</StyledValueBold>
              </StyledTopContainer>

              <StyledFieldBGContainer>
                <StyledLabel>Description</StyledLabel>
                <StyledValueLight className="mt-2">
                  {description}
                </StyledValueLight>
              </StyledFieldBGContainer>

              {!!startDate && (
                <StyledFieldContainer className="mt-2">
                  <StyledLabel>Start date</StyledLabel>
                  <StyledValue>{startDate}</StyledValue>
                </StyledFieldContainer>
              )}

              {!!endDate && (
                <StyledFieldContainer className="mt-3">
                  <StyledLabel>Due date</StyledLabel>
                  <StyledValue>{endDate}</StyledValue>
                </StyledFieldContainer>
              )}
            </StyledInputsContainer>
          );
        }
      )}
    </StyledContainer>
  );
};

export default MilestonesDisplay;
