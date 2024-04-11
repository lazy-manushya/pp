import styled from "@emotion/styled";

export const StyledContainer = styled.div``;

export const StyledTopContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledProgressContainer = styled.div`
  flex: 1;
`;

export const StyledDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const StyledLabel = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #818898;
`;

export const StyledValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0d0d12;
`;

export const StyledHighlightedLabel = styled(StyledLabel)`
  color: #5f57ff;
`;

export const StyledStatusBar = styled.div`
  position: relative;
  height: 4px;
  border-radius: 10rem;
  background: #eceff3;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 75%;
    background: #1dbf73;
    border-radius: inherit;
  }
`;
