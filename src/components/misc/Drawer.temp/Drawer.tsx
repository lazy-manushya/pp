"use client";

import React, { useRef, useState } from "react";

import { StyledContainer, StyledDrawer, StyledHandle } from "./Drawer.styles";
import { IDrawerProps } from "./Drawer.types";
// import { DragMoveEvent, useDrag } from "react-aria";
import useDrag from "./hooks/useDrag";
import { usePreventScroll } from "react-aria";

const Drawer: React.FC<IDrawerProps> = () => {
  const [yPercent, setYPercent] = useState(50);
  const [screenSize, setScreensSize] = useState({
    w: window.screen.width,
    h: window.screen.height,
  });

  usePreventScroll({ isDisabled: true });

  const dragElRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { isDragging } = useDrag({
    el: dragElRef.current as any,
    onMove: (data) => {
      const newYPercent = (data.y * 100) / screenSize.h;
      let deltaYPercent = Math.abs(newYPercent - yPercent);

      if (data.deltaY < 0) {
        deltaYPercent *= -1;
      }
      // const deltaYPercent = (data.deltaY * 100) / screenSize.h;
      // if (drawerRef.current) {
      //   drawerRef.current.style.transform = `translateY(${
      //     (yPercent / 100) * screenSize.h
      //   }px)`;
      // }
      setYPercent(newYPercent + deltaYPercent);
      // const deltaYPercent = (data.deltaY * 100) / screenSize.h;
      console.log("DEBUG:onMove", {
        deltaY: data.deltaY,
        newYPercent,
        deltaYPercent,
        yPercent,
      });
      // setYPercent((prev) => prev + deltaYPercent);
      // if (dragElRef.current)
      //   dragElRef.current.style.transform = `translate(${data.deltaX}px, ${data.deltaY}px)`;
    },
    onDrop: (data) => {
      // const deltaYPercent = (data.y * 100) / screenSize.h;
      // setYPercent((prev) => deltaYPercent);
      // const deltaYPercent = (data.deltaY * 100) / screenSize.h;
      // console.log("DEBUG:onMove", { deltaY:data.deltaY, deltaYPercent });
      // setYPercent((prev) => prev + deltaYPercent);
      // if (dragElRef.current)
      //   dragElRef.current.style.transform = `translate(${data.deltaX}px, ${data.deltaY}px)`;
    },
  });
  // const { dragProps, isDragging } = useDrag({
  //   getItems: () => [],
  //   onDragMove: (e: DragMoveEvent) => {
  //     console.log("DEBUG", { e });
  //   },
  // });
  console.log({ yPercent });
  return (
    <>
      <StyledContainer role="button" tabIndex={0} draggable="true">
        <StyledDrawer
          ref={drawerRef}
          style={{
            transform: `translateY(${(yPercent / 100) * screenSize.h}px)`,
          }}
        >
          <StyledHandle ref={dragElRef} />
          {isDragging ? "DRAGGING" : "DRAG"}
        </StyledDrawer>
      </StyledContainer>
    </>
  );
};

export default Drawer;
