export enum ContractCurrency {
  USD = "USD",
}

export enum ContractTransactionType {
  FullPayment = "full_payment",
}

export enum ContractType {
  Hourly = "hourly",
  OneTime = "full_payment",
  Milestone = "milestone",
}

export enum ContractCreatorType {
  Payer = "client",
  Payee = "contractor",
}

export enum ContractStatus {
  Active = "active",
  Completed = "completed",
  Dispute = "dispute",
  Archive = "archived",
  Paused = "paused",
  Approved = "approved",
  Reject = "reject",
}

export type ContractMilestone = {
  name: string;
  description: string;
  value: number;
  start_date: string | null;
  end_date: string | null;
  currency: ContractCurrency;
};

export type ContractCreatePayload = {
  description: string;
  title: string;
  start_date: string | null;
  end_date: string | null;
  transaction_type: ContractTransactionType;
  contract_type: ContractType;
  milestones: ContractMilestone[];
  created_as: ContractCreatorType;
  attachments: number[];
  client_email_number: string;
  client_name: string;
};

export enum ContractCreationFlow {
  AI = "AI",
  Hourly = "hourly",
  Fixed = "fixed",
  OneTime = "full_payment",
  Milestone = "milestone",
}

export type ContractParticipant = {
  id: number;
  role: ContractCreatorType;
  user: {
    id: number;
    email: string;
    given_name: string;
    family_name: string;
    picture: null;
  };
};

export type CreatedContractDetails = {
  id: string;
  owner_id: number;
  channel_id: string;
  description: string;
  total_value: null;
  title: string;
  rejected_title: null;
  rejected_reason: null;
  is_active: boolean;
  status: ContractStatus;
  parent_id: null;
  completed_at: null;
  completed_by: null;
  start_date: null;
  end_date: null;
  transaction_type: null | ContractTransactionType;
  contract_type: ContractType;
  accepted_by: null;
  rejected_by: null;
  accepted_at: null;
  rejected_at: null;
  updated_at: string;
  created_at: string;
  participants: ContractParticipant[];
};

export type ContractCompleteDetails = {
  id: string;
  owner_id: number;
  channel_id: string;
  description: string;
  total_value: null;
  title: string;
  rejected_title: null;
  rejected_reason: null;
  is_active: boolean;
  status: ContractStatus;
  parent_id: null;
  completed_at: null;
  completed_by: null;
  start_date: null;
  end_date: null;
  transaction_type: null | ContractTransactionType;
  contract_type: ContractType;
  accepted_by: null;
  rejected_by: null;
  accepted_at: null;
  rejected_at: null;
  updated_at: string;
  created_at: string;
  rejectedBy: null;
  acceptedBy: null;
  history: {
    id: number;
    action: string;
    is_active: true;
    data: string;
    contract_milestone_id: null;
    contract_milestone_work_id: null;
    contract_id: string;
    updated_at: string;
    created_at: string;
  }[];
  files: {
    id: number;
    url: string;
    owner_id: number;
    is_active: true;
    milestone_id: null;
    milestone_work_id: null;
    contract_id: string;
    updated_at: string;
    created_at: string;
  }[];
  milestones: {
    id: number;
    name: string;
    description: string;
    currency: ContractCurrency;
    revision_status: null;
    is_active: true;
    version: number;
    parent_milestone_id: null;
    owner_id: number;
    contract_id: string;
    value: string;
    status: string;
    start_date: null;
    end_date: null;
    rejected_by: null;
    rejected_at: null;
    approved_by: null;
    approved_at: null;
    release_at: null;
    updated_at: string;
    created_at: string;
    participants: {
      id: number;
      user_id: number;
      role: ContractCreatorType;
      contract_id: string;
      contract_milestone_id: number;
      updated_at: string;
      created_at: string;
      user: {
        id: number;
        email: string;
        given_name: string;
        family_name: string;
        picture: string;
        owner_id: string;
        stripe_customer_id: string;
        owner_profile: null;
        stripe_connect_data: null;
        updated_at: string;
        created_at: string;
      };
    }[];
  }[];
};
