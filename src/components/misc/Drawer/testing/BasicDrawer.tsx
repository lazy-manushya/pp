"use client";

import React, { useState } from "react";

import Drawer from "../index";

const BasicDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Drawer
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
      Drawer
    </Drawer>
  );
};

export default BasicDrawer;
