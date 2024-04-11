import useSWR from "swr";

import { contractService } from "@/config/services";
import { useAppSelector, selectContract } from "@/services/Store";
import { useAuth } from "@/services/Authentication";

function useContractDetails(contractId: string) {
  const { isAuthenticated } = useAuth();
  const contractDetails = useAppSelector(selectContract(contractId));

  const { data, error, isLoading } = useSWR(
    isAuthenticated ? `/contract/${contractId}` : null,
    () => contractService.getContractByID(contractId),
    { revalidateOnMount: !contractDetails }
  );

  return {
    contractDetails,
    error,
    isLoading,
    isUpdating: !!data && isLoading,
    notFound: !contractDetails && !isLoading,
  };
}

export default useContractDetails;
