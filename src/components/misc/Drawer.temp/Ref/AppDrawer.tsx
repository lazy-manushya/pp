import React, { useCallback, useEffect, useRef, useState, memo } from "react";
import styled from "styled-components";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import lodashGet from "lodash/get";

import DrawerContainer from "./components/DrawerContainer";
import DrawerHeader, { IDrawerHeader } from "./components/DrawerHeader";
import BackDrop from "./components/BackDrop";
import AppPortal from "../AppPortal";
import {
  DRAG_MID_BREAKTPOINT,
  DEFAULT_OPEN_POSITION,
  DRAG_METHOD,
  DRAWER_POSITION,
  DrawerPositionConfig,
  DRAWER_POSITION_CONFIG,
} from "./constants";
import CloseButton, { ICloseButton } from "../CloseButton";
import { enableScroll, disableScroll } from "utils";
import useOutsideClick from "ts/hooks/interactions/useOutsideClick";
import useHasMounted from "ts/hooks/app/useHasMounted";

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  right: 8px;
  top: 26px;
`;

//---------------------------------

const ContentContainer = styled.div`
  flex: 1;
  height: -webkit-fill-available;
  overflow-y: auto;
`;

//===========================

interface IStyledAppDrawer {
  ref?: any;
  drawerPosition?: DRAWER_POSITION;
  drawerYPos?: number;
}

const StyledAppDrawer = styled.div<IStyledAppDrawer>`
  --content-height: calc(100 * var(--vh, 1vh));
  --border-radius: ${(props) => ((props.drawerYPos || 0) < 80 ? "0px" : "6px")};
  display: flex;
  flex-direction: column;

  background: #fff;
  width: 100%;
  height: var(--content-height);
  min-height: var(--content-height);

  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  overflow: hidden;

  animation: rise-up 400ms ease-in-out forwards;
  transform: translateY(50%);

  @keyframes rise-up {
    from {
      /* transform: translateY(50%); */
    }

    to {
      /* transform: translateY(0); */
    }
  }
`;

interface IAppDrawer {
  initialDrawerPosition?: DRAWER_POSITION;
  onRequestClose?: any;

  isOpen?: boolean;
  heading?: string;
  defaultOpenPosition?: DRAWER_POSITION;
  drawerPositionConfig?: DrawerPositionConfig;
  skipMidScreen?: boolean;
  drawerHeaderProps?: IDrawerHeader;
  children?: any;
  toggleOnHeaderClick?: boolean;
  onPositionChange?: any;
  hideBackdrop?: boolean;
  contentStartFromTop?: boolean;
  closeOnOutsideClick?: boolean;
  className?: string;
  closeButtonProps?: ICloseButton;
  showCloseButton?: boolean;
  alwaysShowCloseButton?: boolean;
  style?: React.CSSProperties;
}

const AppDrawer: React.FunctionComponent<IAppDrawer> = ({
  children,
  isOpen,
  onRequestClose,
  initialDrawerPosition = DRAWER_POSITION.closed,
  defaultOpenPosition = DRAWER_POSITION.midScreen,
  heading,
  drawerPositionConfig,
  skipMidScreen,
  drawerHeaderProps = {},
  toggleOnHeaderClick = false,
  onPositionChange,
  hideBackdrop,
  contentStartFromTop = false,
  closeOnOutsideClick = false,
  className,
  closeButtonProps,
  showCloseButton = true,
  alwaysShowCloseButton = false,
  style,
}) => {
  const { hasMounted } = useHasMounted();

  const getDrawerYPosition = useCallback(
    (drawerPosition) => {
      const positionConfig =
        lodashGet(drawerPositionConfig, drawerPosition) ||
        lodashGet(DRAWER_POSITION_CONFIG, drawerPosition);

      const position = lodashGet(positionConfig, "position");

      return position;
    },
    [drawerPositionConfig]
  );

  const drawerRef = useRef<any>();

  const [drawerPosition, setDrawerPosition] = useState<DRAWER_POSITION>(
    initialDrawerPosition
  );
  const drawerPositionRef = useRef<DRAWER_POSITION>(DRAWER_POSITION.closed);
  drawerPositionRef.current = drawerPosition;

  const initialDrawerYPosition = getDrawerYPosition(drawerPosition);

  const [drawerYPos, setDrawerYPos] = useState<any>(initialDrawerYPosition);
  const dragStartYPositionRef = useRef<any>(initialDrawerYPosition);

  const skipMidScreenRef = useRef<any>(false);
  skipMidScreenRef.current = skipMidScreen;

  const handleSetDrawerPosition = useCallback(
    (drawerPosition) => {
      setDrawerPosition(drawerPosition);
      drawerPositionRef.current = drawerPosition;

      if (onPositionChange instanceof Function) {
        onPositionChange(drawerPosition);
      }
    },
    [onPositionChange]
  );

  const handleClose = useCallback(
    (e?: any) => {
      handleSetDrawerPosition(DRAWER_POSITION.closed);
      onRequestClose(e);
      if (e) {
        e.stopPropagation();
      }
    },
    [onRequestClose, handleSetDrawerPosition]
  );

  const updateContentContainerHeight = useCallback(
    (yPos = DEFAULT_OPEN_POSITION) => {
      const yPosRounded = Math.round(yPos);
      const contentHeight = `calc((100 * var(--vh, 1vh)) - ${yPosRounded}px)`;

      if (drawerRef.current) {
        drawerRef.current.style.setProperty("--content-height", contentHeight);
      }
    },
    []
  );

  const setDrawerYPosition = useCallback((yPos) => {
    const yPosRounded = Math.round(yPos);
    const newPos = `${yPosRounded}px`;

    setDrawerYPos(yPos);

    if (drawerRef.current) {
      drawerRef.current.style.transform = `translate(0px, ${newPos})`;
    }
  }, []);

  const handleDrawerHandleClick = useCallback(
    (_) => {
      if (toggleOnHeaderClick) {
        // if (drawerPositionRef.current === DRAWER_POSITION.midScreen) {
        //   handleSetDrawerPosition(DRAWER_POSITION.fullScreen);
        // } else {
        //   handleSetDrawerPosition(DRAWER_POSITION.midScreen);
        // }
      }
    },
    [toggleOnHeaderClick]
  );

  const openDrawer = useCallback(
    (drawerPosition) => {
      handleSetDrawerPosition(drawerPosition);

      const yPos = getDrawerYPosition(drawerPosition);

      setDrawerYPosition(yPos);
      updateContentContainerHeight(yPos);
    },
    [
      getDrawerYPosition,
      setDrawerYPosition,
      handleSetDrawerPosition,
      updateContentContainerHeight,
    ]
  );

  const handleDrag = useCallback(
    (_, data: DraggableData, method?: string) => {
      if (drawerRef.current) {
        const { lastY } = data;
        const lastYRounded = Math.round(lastY);

        if (dragStartYPositionRef.current === null) {
          dragStartYPositionRef.current = lastYRounded;
        }
        const contentHeight = `calc((100 * var(--vh, 1vh)) - ${lastYRounded}px)`;
        drawerRef.current.style.setProperty("--content-height", contentHeight);

        if (method === DRAG_METHOD.dragStart) {
          if (drawerRef.current.style.transition !== "none") {
            drawerRef.current.style.transition = "none";
          }
        }

        if (method === DRAG_METHOD.dragEnd) {
          const delta =
            dragStartYPositionRef.current === null
              ? 0
              : lastY - dragStartYPositionRef.current;

          if (drawerPositionRef.current === DRAWER_POSITION.fullScreen) {
            if (delta > 50) {
              if (skipMidScreenRef.current) {
                handleClose();
              } else {
                openDrawer(DRAWER_POSITION.midScreen);
              }
            } else {
              openDrawer(DRAWER_POSITION.fullScreen);
            }
          } else if (drawerPositionRef.current === DRAWER_POSITION.midScreen) {
            if (delta < -25) {
              openDrawer(DRAWER_POSITION.fullScreen);
            } else if (delta > 50) {
              handleClose();
            } else {
              openDrawer(DRAWER_POSITION.midScreen);
            }
          }

          if (drawerRef.current) {
            drawerRef.current.style.transition = "transform 10ms ease-in-out";
          }

          dragStartYPositionRef.current = null;
        }
      }
    },
    [handleClose, openDrawer]
  );

  //--------------------------------------------

  useOutsideClick(drawerRef, () => {
    if (closeOnOutsideClick && isOpen) handleClose();
  });

  useEffect(() => {
    updateContentContainerHeight();
  }, [updateContentContainerHeight]);

  useEffect(() => {
    if (isOpen) {
      disableScroll();

      openDrawer(defaultOpenPosition);
      const yPos = getDrawerYPosition(defaultOpenPosition);

      setTimeout(() => {
        dragStartYPositionRef.current = yPos;
      }, 400);
    } else {
      enableScroll();

      if (drawerPositionRef.current !== DRAWER_POSITION.closed) {
        handleSetDrawerPosition(DRAWER_POSITION.closed);
      }
    }
  }, [
    isOpen,
    getDrawerYPosition,
    defaultOpenPosition,
    handleSetDrawerPosition,
    openDrawer,
    handleClose,
  ]);

  if (!isOpen || !hasMounted) return null;

  return (
    <AppPortal container={document.body}>
      <DrawerContainer className={className} style={style}>
        {!hideBackdrop && <BackDrop onClick={handleClose} />}

        <Draggable
          allowAnyClick
          axis="y"
          handle=".handle"
          cancel=".non-handle"
          bounds={{ top: 0 }}
          position={{ x: 0, y: drawerYPos }}
          defaultPosition={{ x: 0, y: DRAG_MID_BREAKTPOINT }}
          onStart={(e: DraggableEvent, data: DraggableData) =>
            handleDrag(e, data)
          }
          onDrag={(e: DraggableEvent, data: DraggableData) =>
            handleDrag(e, data, DRAG_METHOD.dragStart)
          }
          onStop={(e: DraggableEvent, data: DraggableData) =>
            handleDrag(e, data, DRAG_METHOD.dragEnd)
          }
        >
          <StyledAppDrawer
            ref={drawerRef}
            drawerPosition={drawerPosition}
            drawerYPos={drawerYPos}
          >
            {showCloseButton &&
              (alwaysShowCloseButton ||
                drawerPosition === DRAWER_POSITION.fullScreen) && (
                <StyledCloseButton
                  style={{ top: !!heading ? "28px" : "8px" }}
                  onClick={handleClose}
                  {...closeButtonProps}
                />
              )}

            <div
              className="handle"
              style={
                contentStartFromTop
                  ? {
                      position: "absolute",
                      top: "0",
                      zIndex: 100,
                      width: "100%",
                    }
                  : {}
              }
            >
              <DrawerHeader
                onClick={handleDrawerHandleClick}
                heading={heading}
                drawerPosition={drawerPosition}
                {...drawerHeaderProps}
              />
            </div>

            <ContentContainer
              style={
                {
                  "--margin": !!heading ? "72px" : "26px",
                } as React.CSSProperties
              }
            >
              {children}
            </ContentContainer>
          </StyledAppDrawer>
        </Draggable>
      </DrawerContainer>
    </AppPortal>
  );
};

export default memo<IAppDrawer>(AppDrawer);
export type { IAppDrawer };
