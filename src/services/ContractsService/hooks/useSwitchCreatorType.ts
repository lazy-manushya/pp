import { useCallback, useState } from "react";

import {
  authActions,
  selectCreatorType,
  store,
  useAppSelector,
} from "@/services/Store";

import { ContractCreatorType } from "../ContractsService.types";

function useSwitchCreatorType() {
  const creatorType = useAppSelector(selectCreatorType);

  const [inProgress, setInProgress] = useState(false);
  const [switched, setSwitched] = useState(false);

  const switchCreatorType = useCallback(() => {
    if (inProgress) return;

    setInProgress(true);

    const newValue =
      creatorType === ContractCreatorType.Payee
        ? ContractCreatorType.Payer
        : ContractCreatorType.Payee;

    setTimeout(() => {
      store.dispatch(authActions.setCreatorType(newValue));
      setSwitched(true);
      setInProgress(false);

      setTimeout(() => {
        setSwitched(false);
      }, 1500);
    }, 1500);
  }, [inProgress, creatorType]);

  return {
    inProgress,
    switched,
    switchCreatorType,
    creatorType,
  };
}

export default useSwitchCreatorType;
