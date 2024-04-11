import React from "react";

import { StyledTable } from "./DetailsTable.styles";
import { IDetailsTableProps } from "./DetailsTable.types";

const DetailsTable: React.FC<IDetailsTableProps> = ({ items, className }) => {
  return (
    <StyledTable className={className}>
      <tbody>
        {items.map(({ label, value }, i) => (
          <tr key={i}>
            <td>{label}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default DetailsTable;
