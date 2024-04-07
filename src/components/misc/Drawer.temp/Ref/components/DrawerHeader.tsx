import React from "react";
import styled from "styled-components";
import Button, { IButton } from "ts/components/Button";
import { DRAWER_POSITION } from "..";

// const Dash = styled.span`
//   width: 24px;
//   height: 4px;
//   background: var(--color);
//   border-radius: 2px;
//   pointer-events: none;
// `;

const StyledButton = styled(Button)`
  --color: #e4ecf7;
  --border-radius: 0;
  --border-color: transparent;
  --bg-color: transparent;
  position: relative;
  padding: 0;
  width: 120px;
  max-width: calc(100% - 2rem);
  height: 24px;
  box-shadow: none;
  outline: none !important;

  &:active,
  &:focus {
    --color: var(--color-primary-blue) !important;
  }

  &:after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    content: "";
    width: 60px;
    height: 4px;
    background: var(--color);
    border-radius: 2px;
    pointer-events: none;
  }
`;

const Handle = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  padding: 8px 1rem;
`;

const Heading = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: center !important;
  color: #2d3748;
  margin-bottom: 0;
`;

//----------------------------

const StyledDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 46px;
`;

interface IDrawerHeader {
  className?: string;
  onClick?: any;
  heading?: any;
  headerContent?: any;
  drawerPosition?: DRAWER_POSITION;
  handleButtonProps?: IButton;
}

const DrawerHeader: React.FunctionComponent<IDrawerHeader> = ({
  className,
  onClick,
  heading,
  headerContent,
  drawerPosition,
  handleButtonProps = {},
}) => {
  return (
    <StyledDrawerHeader
      className={className}
      style={
        drawerPosition === DRAWER_POSITION.fullScreen
          ? {
              padding: "0 32px",
            }
          : {}
      }
    >
      <div>
        <Handle>
          <StyledButton
            {...handleButtonProps}
            onClick={() => {
              onClick();
              return true;
            }}
          >
            {/* <Dash /> */}
          </StyledButton>
        </Handle>

        {(!!heading || !!headerContent) && (
          <ContentContainer>
            {headerContent}
            {!!heading && <Heading>{heading}</Heading>}
          </ContentContainer>
        )}
      </div>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
export type { IDrawerHeader };
