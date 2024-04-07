import { ContractCurrency } from "@/services/ContractsService";

export interface IPriceCurrenyFieldProps {
  price: number;
  onPriceChange: (value: number) => void;
  currency: ContractCurrency;
  onCurrencyChange: (value: ContractCurrency) => void;
  className?: string;
}
