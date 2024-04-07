import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash/throttle";

type Position = {
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
};

interface Options {
  el: HTMLElement;
  onMoveStart: (data: Position) => void;
  onMove: (data: Position) => void;
  onDrop: (data: Position) => void;
}

function useDrag(options: Options) {
  const { el, onMove: onMove, onDrop, onMoveStart } = options;

  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(isDragging);

  const startPosRef = useRef({
    x: 0,
    y: 0,
  });

  const handleMove_ = useCallback(
    (position: Position) => {
      onMove(position);
    },
    [onMove]
  );
  const handleMove = useMemo(() => throttle(handleMove_, 10), [handleMove_]);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      setIsDragging(true);
      isDraggingRef.current = true;

      const x = e.clientX;
      const y = e.clientY;
      startPosRef.current = {
        x,
        y,
      };

      onMoveStart({ x, y, deltaX: 0, deltaY: 0 });
    },
    [onMoveStart]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const x = e.clientX;
      const y = e.clientY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      handleMove({ x, y, deltaX, deltaY });
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      setIsDragging(false);
      isDraggingRef.current = false;

      const x = e.clientX;
      const y = e.clientY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      onDrop({ x, y, deltaX, deltaY });
    },
    [onDrop]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      setIsDragging(true);
      isDraggingRef.current = true;

      const x = e.changedTouches[0].pageX;
      const y = e.changedTouches[0].pageY;
      startPosRef.current = {
        x,
        y,
      };

      onMoveStart({ x, y, deltaX: 0, deltaY: 0 });
    },
    [onMoveStart]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDraggingRef.current) return;

      const x = e.changedTouches[0].pageX;
      const y = e.changedTouches[0].pageY;
      const deltaX = x - startPosRef.current.x;
      const deltaY = y - startPosRef.current.y;
      handleMove({ x, y, deltaX, deltaY });
    },
    [handleMove]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!isDraggingRef.current) return;

      setIsDragging(false);
      isDraggingRef.current = false;

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
      el.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      el.addEventListener("touchstart", handleTouchStart, { passive: true });
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        el.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [
    el,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return { isDragging };
}

export default useDrag;
