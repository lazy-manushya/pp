"use client";

import { useState } from "react";

import DateField from "@/components/input/DateField";

const Test = () => {
  const [value, setValue] = useState("");

  return <DateField value={value} onChange={setValue} />;
};

export default Test;
