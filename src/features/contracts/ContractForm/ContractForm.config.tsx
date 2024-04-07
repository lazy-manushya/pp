import * as yup from "yup";

import Icon from "@/components/misc/Icon";
import {
  ContractCreatorType,
  ContractCurrency,
  ContractTransactionType,
  ContractType,
  ContractMilestone,
} from "@/services/ContractsService";

import {
  ClientInputType,
  ContractFormValues,
  Step,
} from "./ContractForm.types";
import ContractCreatorTypeStep from "./components/steps/ContractCreatorTypeStep";
import ContractTypeStep from "./components/steps/ContractTypeStep";
import ContractDetailsStep from "./components/steps/ContractDetailsStep";
import ReviewStep from "./components/steps/ReviewStep";

export const VALIDATION_SCHEMA = yup.object().shape({});

export const INITIAL_VALUES: ContractFormValues = {
  title: "Enlarz - Design system",
  description:
    "Deserunt aute qui elit ullamco labore irure. Proident ullamco veniam Lorem consequat aliquip. Deserunt nulla reprehenderit consectetur eu exercitation sunt magna eu. Consectetur nostrud enim nisi consequat consectetur nostrud. Non ut dolor fugiat exercitation aliqua enim excepteur veniam exercitation reprehenderit.",
  start_date: null,
  end_date: null,
  transaction_type: ContractTransactionType.FullPayment,
  contract_type: ContractType.Milestone,
  milestones: [
    {
      name: "Component library",
      description:
        "Aliqua aliquip cupidatat pariatur non. Cillum veniam officia consequat dolor eiusmod nostrud exercitation magna. Aute velit aliquip reprehenderit proident deserunt aliquip ea. Veniam Lorem amet Lorem pariatur deserunt sit minim consectetur amet magna consectetur. Fugiat laboris ullamco anim sint Lorem duis.",
      start_date: new Date(2024, 0, 19).toISOString(),
      end_date: new Date(2024, 0, 24).toISOString(),
      currency: ContractCurrency.USD,
      value: 800,
    } satisfies ContractMilestone,
    {
      name: "Atomic library",
      description:
        "Irure consequat veniam id aliqua id anim nostrud enim non sint. Excepteur cillum aliqua aliqua dolore dolor reprehenderit. Consequat eu voluptate laboris minim nostrud ipsum ipsum voluptate ex eu quis. Proident nisi anim amet id adipisicing cillum. Aliquip eiusmod minim ad reprehenderit ut labore irure aliqua nisi.",
      start_date: new Date(2024, 0, 19).toISOString(),
      end_date: new Date(2024, 0, 24).toISOString(),
      currency: ContractCurrency.USD,
      value: 400,
    } satisfies ContractMilestone,
  ],
  created_as: ContractCreatorType.Payee,
  attachments: [],
  client_email_number: "hi@francois.co",
  client_name: "Francois Hana",
  files: [],
};

export const OLD_INITIAL_VALUES: ContractFormValues = {
  description: "",
  title: "",
  start_date: "",
  end_date: "",
  transaction_type: ContractTransactionType.FullPayment,
  contract_type: ContractType.OneTime,
  milestones: [
    {
      name: "",
      description: "",
      start_date: null,
      end_date: null,
      currency: ContractCurrency.USD,
      value: 0,
    } as ContractMilestone,
  ],
  created_as: "" as ContractCreatorType.Payer,
  attachments: [],
  client_email_number: "",
  client_name: "",
  files: [],
};

export const CONTRACT_TYPE_OPTIONS = [
  {
    value: ContractType.OneTime,
    children: (
      <>
        <Icon src="/assets/images/icons/money.svg" size="xs" /> One time
      </>
    ),
  },
  {
    value: ContractType.Milestone,
    children: (
      <>
        <Icon src="/assets/images/icons/milestone.svg" size="sm" />
        Milestone
      </>
    ),
  },
];

export const CLIENT_INPUT_OPTIONS = [
  {
    value: ClientInputType.PaypipeId,
    children: "Paypipe ID",
  },
  {
    value: ClientInputType.Email,
    children: "Email",
  },
];

export const STEPS_CONFIG: Record<
  Step,
  {
    order: number;
    component: any;
    title: string;
  }
> = {
  [Step.ContractCreator]: {
    order: 1,
    component: <ContractCreatorTypeStep />,
    title: "",
  },
  [Step.ContractType]: { order: 2, component: <ContractTypeStep />, title: "" },
  [Step.ContractDetails]: {
    order: 3,
    component: <ContractDetailsStep />,
    title: "Create a transaction",
  },
  [Step.Review]: {
    order: 4,
    component: <ReviewStep />,
    title: "Review your offer",
  },
};

export const STEPS_LIST = Object.entries(STEPS_CONFIG)
  .map(([id, config]) => ({ id, ...config }))
  .sort((a, b) => a.order - b.order);

export const CONTRACT_TYPE_CONFIG: Record<
  ContractType,
  {
    info: { title: string; description: string };
  }
> = {
  [ContractType.OneTime]: {
    info: {
      title: "One-time",
      description:
        "A single, comprehensive project or task with a fixed scope and payment.",
    },
  },
  [ContractType.Milestone]: {
    info: {
      title: "Milestone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
  [ContractType.Hourly]: {
    info: {
      title: "Hourly (Coming soon)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
};
