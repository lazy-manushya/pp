"use client";

import styled from "@emotion/styled";

import Button from "@/components/input/Button";

export const StyledContainer = styled.div`
  display: flex;
  background: #f9f9f9;
  border-radius: 10rem;
  padding: 2px;
`;

export const StyledTab = styled(Button)<{ $active: boolean }>`
  flex: 1;
  border-radius: inherit;
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  color: ${({ $active }) => ($active ? "#242B42" : "#818898")};
  ${({ $active }) =>
    $active
      ? `
          background: #FFFFFF;
          box-shadow: 0px 2px 10px 0px #A9AAB41A;
        `
      : ""};
`;
