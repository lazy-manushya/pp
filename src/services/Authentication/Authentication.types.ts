import { ApiResponse } from "@/services/Api";

export interface IAuthContext {
  login: () => Promise<void>;
  register: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated?: boolean;
}

export interface IAuthProviderProps {
  children?: React.ReactNode;
}

export type WalletSummary = {
  id: number;
  owner_id: number;
  balance: string;
  updated_at: string;
  created_at: string;
};

export type UserDetails = {
  id: number;
  email: string;
  given_name: string;
  family_name: string;
  picture: any;
  owner_id: string;
  stripe_customer_id: string;
  owner_profile: string | null;
  stripe_connect_data: any;
  updated_at: string;
  created_at: string;
  wallet: WalletSummary;
};

export type UserRegisterResponse = ApiResponse<UserDetails>;

export type UserInfoResponse = ApiResponse<{
  charges_enabled: boolean;
  user: UserDetails;
}>;
