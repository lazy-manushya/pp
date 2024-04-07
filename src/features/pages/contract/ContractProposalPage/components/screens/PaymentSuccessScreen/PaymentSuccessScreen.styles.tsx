import Button from "@/components/input/Button";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  padding-top: 3rem;
`;

export const StyledTopContainer = styled.div`
  flex: 1;

  & > div > p {
    max-width: 32ch;
  }
`;

export const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledButton = styled(Button)`
  font-weight: 600;
  gap: 0.5rem;
  padding-block: 1rem;
`;

export const StyledButtonDark = styled(StyledButton)`
  color: #0d0d12;
`;
