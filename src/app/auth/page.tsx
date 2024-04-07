"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import { SITE_PATHS } from "@/config/routing";

const Page = () => {
  useEffect(() => {
    redirect(SITE_PATHS.HOME_PAGE);
  }, []);

  return null;
};

export default Page;
