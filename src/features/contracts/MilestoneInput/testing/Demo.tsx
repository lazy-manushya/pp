import React, { useState } from "react";

import {
  ContractCurrency,
  ContractMilestone,
} from "@/services/ContractsService";

import MilestoneInput from "../MilestoneInput";

const MilestoneInputDemo: React.FC = () => {
  const [milestones, setMilestones] = useState<ContractMilestone[]>([
    {
      name: "Component library",
      currency: ContractCurrency.USD,
      value: 800,
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit est rhoncus lectus tristique venenatis mi mollis viverra. Sit venenatis facilisis lorem eu.",
      start_date: "Jan 19 2024",
      end_date: "Jan 24 2024",
    },
    {
      name: "Atomic library",
      currency: ContractCurrency.USD,
      value: 400,
      description:
        "Lorem ipsum dolor sit amet consectetur. Elit est rhoncus lectus tristique venenatis mi mollis viverra. Sit venenatis facilisis lorem eu.",
      start_date: "Jan 25 2024",
      end_date: "Jan 29 2024",
    },
  ]);

  return <MilestoneInput value={milestones} onChange={setMilestones} />;
};

export default MilestoneInputDemo;
