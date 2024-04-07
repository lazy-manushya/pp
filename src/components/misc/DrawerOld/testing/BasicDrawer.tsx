"use client";

import React, { useState } from "react";

import Drawer from "../index";

const BasicDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Drawer
      isOpen={isOpen}
      onChange={({ state }) => {
        setIsOpen(state !== "closed");
      }}
    >
      Drawer
    </Drawer>
  );
};

export default BasicDrawer;
