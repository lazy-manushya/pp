import {
  WINDOW_SCREEN_INNER_HEIGHT,
  WINDOW_SCREEN_HEIGHT,
} from "utils/ScreenUtils";

export const DRAG_THRESHHOLD = WINDOW_SCREEN_INNER_HEIGHT * 0.5;
export const DRAG_TOP_BREAKTPOINT = 80;
export const DRAG_MID_BREAKTPOINT = DRAG_THRESHHOLD;
export const DEFAULT_OPEN_POSITION = DRAG_MID_BREAKTPOINT;

export enum DRAG_METHOD {
  dragStart = "dragStart",
  dragging = "dragging",
  dragEnd = "dragEnd",
}

export enum DRAWER_POSITION {
  fullScreen = "fullScreen",
  midScreen = "midScreen",
  closed = "closed",
}

export type DrawerPositionConfig = {
  [DRAWER_POSITION.fullScreen]?: {
    position?: number;
  };

  [DRAWER_POSITION.midScreen]?: {
    position?: number;
  };

  [DRAWER_POSITION.closed]?: {
    position?: number;
  };
};

export const DRAWER_POSITION_CONFIG: DrawerPositionConfig = Object.freeze({
  [DRAWER_POSITION.fullScreen]: {
    position: 0,
  },

  [DRAWER_POSITION.midScreen]: {
    position: DRAG_MID_BREAKTPOINT,
  },

  [DRAWER_POSITION.closed]: {
    position: WINDOW_SCREEN_HEIGHT,
  },
});
