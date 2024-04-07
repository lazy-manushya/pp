"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import lodashGet from "lodash/get";
import { usePreventScroll } from "react-aria";

import { DrawerState, IDrawerProps } from "./Drawer.types";
import {
  StyledBackDrop,
  StyledContainer,
  StyledContentContainer,
  StyledDrawer,
  StyledHandle,
  StyledHeader,
} from "./Drawer.styles";

const Drawer: React.FC<IDrawerProps> = ({ children, isOpen, onChange }) => {
  const drawerElRef = useRef<HTMLDivElement | null>(null);

  usePreventScroll({ isDisabled: isOpen });

  const [screenSize] = useState({
    w: window.screen.width,
    h: window.screen.height,
  });

  const DRAWER_POSITION_CONFIG: Record<DrawerState, { y: number }> = useMemo(
    () => ({
      "open-fullscreen": {
        y: 0,
      },

      open: {
        y: screenSize.h * 0.5,
      },

      closed: {
        y: screenSize.h,
      },
    }),
    [screenSize]
  );

  const getDrawerYPosition = useCallback(
    (drawerPosition: DrawerState) => {
      const positionConfig = lodashGet(DRAWER_POSITION_CONFIG, drawerPosition);
      const position = lodashGet(positionConfig, "y");
      return position;
    },
    [DRAWER_POSITION_CONFIG]
  );

  const [state, setState] = useState<DrawerState>("open");
  const stateRef = useRef(state);
  stateRef.current = state;

  const [drawerYPos, setDrawerYPos] = useState(getDrawerYPosition(state));
  const dragStartYPositionRef = useRef<any>(drawerYPos);

  const skipMidScreen = false;
  const skipMidScreenRef = useRef<any>(skipMidScreen);
  skipMidScreenRef.current = skipMidScreen;

  const updateContentContainerHeight = useCallback(
    (yPos = DRAWER_POSITION_CONFIG.open.y) => {
      const yPosRounded = Math.round(yPos);
      const contentHeight = `calc((100 * var(--vh, 1vh)) - ${yPosRounded}px)`;

      if (drawerElRef.current) {
        drawerElRef.current.style.setProperty(
          "--content-height",
          contentHeight
        );
      }
    },
    [DRAWER_POSITION_CONFIG]
  );

  const setDrawerYPosition = useCallback((yPos: number) => {
    const yPosRounded = Math.round(yPos);
    const newPos = `${yPosRounded}px`;

    setDrawerYPos(yPos);

    if (drawerElRef.current) {
      drawerElRef.current.style.transform = `translateY(${newPos})`;
    }
  }, []);

  const openDrawer = useCallback(
    (state: DrawerState) => {
      setState(state);
      const yPos = getDrawerYPosition(state);

      setDrawerYPosition(yPos);
      updateContentContainerHeight(yPos);
    },
    [getDrawerYPosition, setDrawerYPosition, updateContentContainerHeight]
  );

  const handleSetState = useCallback(
    (state: DrawerState) => {
      setState(state);
      stateRef.current = state;

      if (onChange) {
        onChange({ state });
      }
    },
    [onChange]
  );

  const closeDrawer = useCallback(
    (e?: any) => {
      console.log("DEBUG closeDrawer");
      handleSetState("closed");
      // onRequestClose(e);

      if (e) {
        e.stopPropagation();
      }
    },
    [handleSetState]
    // [onRequestClose, handleSetDrawerPosition]
  );

  const handleDrag = useCallback(
    (e: DraggableEvent, data: DraggableData) => {
      if (!drawerElRef.current) return;

      const { lastY } = data;
      const lastYRounded = Math.round(lastY);

      if (dragStartYPositionRef.current === null) {
        dragStartYPositionRef.current = lastYRounded;
      }

      const contentHeight = `calc(100vh - ${lastYRounded}px)`;
      drawerElRef.current.style.setProperty("--content-height", contentHeight);

      if (e.type === "touchstart") {
        if (drawerElRef.current.style.transition !== "none") {
          drawerElRef.current.style.transition = "none";
        }
      }

      if (e.type === "touchend") {
        const delta =
          dragStartYPositionRef.current === null
            ? 0
            : lastY - dragStartYPositionRef.current;

        console.log("DEBUG", { "stateRef.current": stateRef.current });

        if (stateRef.current === "open-fullscreen") {
          if (delta > 50) {
            if (skipMidScreenRef.current) {
              closeDrawer();
            } else {
              openDrawer("open");
            }
          } else {
            openDrawer("open-fullscreen");
          }
        } else if (stateRef.current === "open") {
          if (delta < -25) {
            openDrawer("open-fullscreen");
          } else if (delta > 50) {
            closeDrawer();
          } else {
            openDrawer("open");
          }
        }

        if (drawerElRef.current) {
          drawerElRef.current.style.transition = "transform 80ms ease-in-out";
        }

        dragStartYPositionRef.current = null;
      }
    },
    [closeDrawer, openDrawer]
  );

  useEffect(() => {
    if (isOpen) {
      openDrawer("open");
      const yPos = getDrawerYPosition("open");

      setTimeout(() => {
        dragStartYPositionRef.current = yPos;
      }, 400);
    } else {
      if (stateRef.current !== "closed") {
        handleSetState("closed");
      }
    }
  }, [isOpen, getDrawerYPosition, handleSetState, openDrawer, closeDrawer]);

  if (!isOpen) return null;

  return (
    <StyledContainer>
      <StyledBackDrop />

      <Draggable
        allowAnyClick
        axis="y"
        handle=".handle"
        cancel=".non-handle"
        bounds={{ top: 0 }}
        position={{ x: 0, y: drawerYPos }}
        defaultPosition={{ x: 0, y: DRAWER_POSITION_CONFIG.open.y }}
        onStart={handleDrag}
        onDrag={handleDrag}
        onStop={handleDrag}
      >
        <StyledDrawer $y={drawerYPos} ref={drawerElRef}>
          <div className="handle">
            <StyledHeader>
              <StyledHandle />
            </StyledHeader>
          </div>

          <StyledContentContainer>{children}</StyledContentContainer>
        </StyledDrawer>
      </Draggable>
    </StyledContainer>
  );
};

export default Drawer;
