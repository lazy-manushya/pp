import useSWR from "swr";

import { contractService } from "@/config/services";
import { useAppSelector, selectContracts } from "@/services/Store";

function useContractList() {
  const contracts = useAppSelector(selectContracts);

  const { data, error, isLoading } = useSWR(
    "/contract",
    contractService.fetchContracts
  );

  return {
    data: contracts,
    error,
    isLoading,
    isUpdating: !!data && isLoading,
    hasNoData: !contracts.length && !isLoading,
  };
}

export default useContractList;
