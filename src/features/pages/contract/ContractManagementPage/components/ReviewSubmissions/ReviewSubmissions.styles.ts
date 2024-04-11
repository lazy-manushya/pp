import styled from "@emotion/styled";

import Card from "@/components/data/Card";

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 1.5rem;

  & > span {
    flex: 1;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const StyledContentSection = styled.div`
  flex: 1;
  padding: 1rem;
  overflow: auto;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const StyledBottomSection = styled.div`
  padding: 1rem;

  & > p {
    font-size: 14px;
    line-height: 170%;
    color: #0d0d12;
    text-align: center;
    margin: 0;
  }
`;
