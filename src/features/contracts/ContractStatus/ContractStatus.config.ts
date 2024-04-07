import { ContractStatus } from "@/services/ContractsService";

const COLORS = {
  BLUE: "#5F57FF",
  ORANGE: "#D08824",
  RED: "#EA5B5B",
  GREEN: "#1DBF73",
};

export const STATUS_CONFIG: Record<
  ContractStatus,
  { color: string; label: string }
> = {
  [ContractStatus.Active]: {
    color: COLORS.ORANGE,
    label: "Pending approval",
  },
  [ContractStatus.Archive]: {
    color: COLORS.ORANGE,
    label: "Paid",
  },
  [ContractStatus.Paused]: {
    color: COLORS.ORANGE,
    label: "Paid",
  },
  [ContractStatus.Approved]: {
    color: COLORS.BLUE,
    label: "Paid",
  },
  [ContractStatus.Dispute]: {
    color: COLORS.RED,
    label: "Disputed",
  },
  [ContractStatus.Reject]: {
    color: COLORS.RED,
    label: "Rejected",
  },
  [ContractStatus.Completed]: {
    color: COLORS.GREEN,
    label: "Paid",
  },
};
