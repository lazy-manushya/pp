import { useContext, createContext } from "react";

import { IRadioGroupContext } from "./RadioGroup.types";

export const RadioGroupContext = createContext({} as IRadioGroupContext);

export const useRadioGroupContext = () => useContext(RadioGroupContext);
