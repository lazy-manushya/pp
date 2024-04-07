"use client";

import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import AppTabBar from "@/components/navigation/TabBar";

import { TAB_BAR_ITEMS } from "./AppPrimaryTabBar.config";
import CreateContractDrawer from "@/features/contracts/CreateContractDrawer";

const AppPrimaryTabBar: React.FC = () => {
  const pathname = usePathname();
  const [isContractDrawerOpen, setIsContractDrawerOpen] = useState(false);

  const tabBarItems = useMemo(() => {
    const items = [...TAB_BAR_ITEMS].map((item) => ({
      ...item,
      active: pathname === item.link,
    }));

    items[2].onClick = () => {
      setIsContractDrawerOpen(true);
    };
    items[2].link = "";

    return items;
  }, [pathname, setIsContractDrawerOpen]);

  return (
    <>
      <AppTabBar items={tabBarItems} />

      <CreateContractDrawer
        isOpen={isContractDrawerOpen}
        onRequestClose={() => {
          setIsContractDrawerOpen(false);
        }}
      />
    </>
  );
};

export default AppPrimaryTabBar;
