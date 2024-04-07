import styled from "@emotion/styled";

export const StyledSectionHeading = styled.div`
  font-size: 16px;
  line-height: 170%;
  font-weight: 700;
  color: #171717;
`;

export const StyledContractTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #03103080;
`;

export const StyledContractValue = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #080808;
`;

export const StyledSection = styled.div`
  padding: 0.5rem 1rem;
  background: #fbfbfb;
  margin-inline: -1rem;
`;

export const StyledDetailsTable = styled.table`
  border-collapse: collapse; 

  tr:not(:last-of-type) {
    border-bottom: 1px solid #f6f8fa;
  }

  td {
    min-width: fit-content;
    vertical-align: top;
    padding-block: 0.75rem;
  }

  td:first-of-type {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #818898;
    text-align: left;
    white-space: nowrap;
  }

  td:last-of-type {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #0d0d12;
    text-align: right;
    font-weight: 400;
  }
`;
