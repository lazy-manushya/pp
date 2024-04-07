import React from "react";

import {
  StyledContainer,
  StyledCurrenyField,
  StyledPriceField,
} from "./PriceCurrenyField.styles";
import { IPriceCurrenyFieldProps } from "./PriceCurrenyField.types";

const PriceCurrenyField: React.FC<IPriceCurrenyFieldProps> = ({
  currency,
  onCurrencyChange,
  price,
  onPriceChange,
  className,
}) => {
  return (
    <StyledContainer className={className}>
      <StyledPriceField
        value={currency}
        onChange={onCurrencyChange as any}
        label="Currency"
      />
      <StyledCurrenyField
        value={price || ""}
        onChange={(value) => onPriceChange(+value)}
        type="number"
        placeholder="Price"
      />
    </StyledContainer>
  );
};

export default PriceCurrenyField;
