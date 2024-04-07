"use client";

import React from "react";
import { createPortal } from "react-dom";

import { IPortalProps } from "./Portal.types";

const Portal: React.FC<IPortalProps> = ({
  children,
  container = window.document,
}) => {
  return createPortal(<div>{children}</div>, container);
};

export default Portal;
