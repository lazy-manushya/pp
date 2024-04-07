import { useCallback, useEffect, useRef, useState } from "react";

interface Options {
  el: HTMLElement;
  onMove: (data: {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
  }) => void;
  onDrop: (data: {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
  }) => void;
}

function useDrag(options: Options) {
  const { el, onMove ,onDrop} = options;

  const [isDragging, setIsDragging] = useState(false);

  const startPosRef = useRef({
    x: 0,
    y: 0,
  });

  const handleDragStart = useCallback((e: DragEvent) => {
    // console.log("DEBUG:handleDragStart", { e });
    setIsDragging(true);

    const x = e.clientX;
    const y = e.clientY;
    startPosRef.current = {
      x,
      y,
    };
  }, []);

  const handleDrag = useCallback(
    (e: DragEvent) => {
    //   console.log("DEBUG:handleDrag", { e });

      const x = e.clientX;
      const y = e.clientY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      onMove({ x, y, deltaX, deltaY });
    },
    [onMove]
  );

  const handleDragEnd = useCallback(
    (e: DragEvent) => {
    //   console.log("DEBUG:handleDragEnd", { e });
      setIsDragging(false);

      const x = e.clientX;
      const y = e.clientY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      onDrop({ x, y, deltaX, deltaY });
    },
    [onDrop]
  );

  const handleTouchStart = useCallback((e: TouchEvent) => {
    // console.log("DEBUG:handleTouchStart", { e });
    setIsDragging(true);

    const x = e.changedTouches[0].pageX;
    const y = e.changedTouches[0].pageY;
    startPosRef.current = {
      x,
      y,
    };
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      console.log("DEBUG:handleTouchMove", { e });

      const x = e.changedTouches[0].pageX;
      const y = e.changedTouches[0].pageY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      onMove({ x, y, deltaX, deltaY });
    },
    [onMove]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
    //   console.log("DEBUG:handleTouchEnd", { e });
      setIsDragging(false);

      const x = e.changedTouches[0].pageX;
      const y = e.changedTouches[0].pageY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      onDrop({ x, y, deltaX, deltaY });
    },
    [onDrop]
  );

  useEffect(() => {
    if (el) {
      el.addEventListener("dragstart", handleDragStart);
      el.addEventListener("drag", handleDrag);
      el.addEventListener("dragend", handleDragEnd);
      el.addEventListener("touchstart", handleTouchStart);
      el.addEventListener("touchmove", handleTouchMove);
      el.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (el) {
        el.removeEventListener("dragstart", handleDragStart);
        el.removeEventListener("drag", handleDrag);
        el.removeEventListener("dragend", handleDragEnd);
        el.removeEventListener("touchstart", handleTouchStart);
        el.removeEventListener("touchmove", handleTouchMove);
        el.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [
    el,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return { isDragging };
}

export default useDrag;
