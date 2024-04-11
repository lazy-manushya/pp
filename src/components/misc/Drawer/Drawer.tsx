"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePreventScroll } from "react-aria";

import {
  StyledBackdrop,
  StyledContentContainer,
  StyledDrawer,
  StyledHandle,
  StyledHeader,
} from "./Drawer.styles";
import { DrawerPostion, IDrawerProps } from "./Drawer.types";
import useDrag from "./hooks/useDrag";
import { ANIMATION_CLASSNAMES } from "@/styles";

const Drawer: React.FC<IDrawerProps> = ({
  isOpen,
  onRequestClose,
  children,
  drawerMidHeight,
  canDrag,
  headerProps,
}) => {
  const [screenSize] = useState({
    w: window.screen.width,
    h: window.screen.height,
  });

  usePreventScroll({ isDisabled: isOpen });

  const elStartHeightRef = useRef(0);

  const backdropRef = useRef<HTMLDivElement | null>(null);

  const [dragElRef, setDragElRef] = useState<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState<DrawerPostion>(
    isOpen ? DrawerPostion.midScreen : DrawerPostion.closed
  );
  const positionRef = useRef<DrawerPostion>(position);

  //---------------

  const setDrawerPosition = useCallback(
    (newPostion: DrawerPostion) => {
      positionRef.current = newPostion;
      setPosition(newPostion);

      let heightCssValue = "0";

      if (newPostion === DrawerPostion.fullScreen) {
        heightCssValue = "100vh";
      } else if (newPostion === DrawerPostion.midScreen) {
        heightCssValue = drawerMidHeight || "60vh";
      } else {
        if (backdropRef.current) {
          backdropRef.current.style.background = "transparent";
        }

        if (drawerRef.current) {
          drawerRef.current.style.display = "none";
        }
      }

      setTimeout(() => {
        if (drawerRef.current) {
          drawerRef.current.style.height = heightCssValue;
        }
      }, 50);

      setTimeout(() => {
        if (newPostion === DrawerPostion.closed) {
          onRequestClose();
        }
      }, 320);
    },
    [onRequestClose, drawerMidHeight]
  );

  const close = useCallback(() => {
    if (isOpen) setDrawerPosition(DrawerPostion.closed);
  }, [setDrawerPosition, isOpen]);

  //---------------

  const { isDragging } = useDrag({
    el: dragElRef as any,
    onMoveStart: () => {
      if (!drawerRef.current || !canDrag) {
        return;
      }

      elStartHeightRef.current =
        drawerRef.current.getBoundingClientRect().height;
    },
    onMove: (data) => {
      if (data.y === 0 || !drawerRef.current || !canDrag) {
        return;
      }

      const oldHeight = elStartHeightRef.current;
      const height = oldHeight + -data.deltaY;
      let heightInPercent = (height * 100) / screenSize.h;
      heightInPercent = Math.min(100, heightInPercent);

      if (drawerRef.current)
        drawerRef.current.style.height = `${heightInPercent}vh`;
    },
    onDrop: (data) => {
      if (!drawerRef.current || !canDrag) {
        return;
      }

      const deltaYPercent = (-data.deltaY * 100) / screenSize.h;
      let newPostion = positionRef.current;

      if (positionRef.current === DrawerPostion.midScreen) {
        if (deltaYPercent > 5) {
          newPostion = DrawerPostion.fullScreen;
        } else if (deltaYPercent < -5) {
          newPostion = DrawerPostion.closed;
        }
      } else if (positionRef.current === DrawerPostion.fullScreen) {
        if (deltaYPercent < -20) {
          newPostion = DrawerPostion.closed;
        } else if (deltaYPercent < -5) {
          newPostion = DrawerPostion.midScreen;
        }
      }

      setDrawerPosition(newPostion);
    },
  });

  //---------------

  useEffect(() => {
    if (isOpen && positionRef.current === DrawerPostion.closed) {
      setDrawerPosition(DrawerPostion.midScreen);
    } else if (!isOpen && positionRef.current !== DrawerPostion.closed) {
      setDrawerPosition(DrawerPostion.closed);
    }
  }, [isOpen, setDrawerPosition]);

  //---------------

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <StyledBackdrop ref={backdropRef} onClick={close} />

      <StyledDrawer
        $isDragging={isDragging}
        $position={position}
        ref={drawerRef}
        className={ANIMATION_CLASSNAMES.FADE_IN_FROM_BOTTOM}
      >
        <StyledHeader className={headerProps?.className}>
          {headerProps?.children}
          <StyledHandle
            ref={setDragElRef}
            style={{ display: canDrag ? "block" : "none" }}
          />
        </StyledHeader>

        <StyledContentContainer $isDragging={isDragging}>
          {children}
        </StyledContentContainer>
      </StyledDrawer>
    </>
  );
};

export default Drawer;
