import { useRef } from "react";
import { useCalendarCell } from "react-aria";

import {
  StyledCell,
  StyledCellButton,
} from "../CalendarGrid/CalendarGrid.styles";

const CalendarCell = ({ state, date }: any) => {
  let ref = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    // isDisabled,
    // isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <StyledCell {...cellProps}>
      <StyledCellButton
        {...buttonProps}
        $isOutsideVisibleRange={isOutsideVisibleRange}
        $isSelected={isSelected}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""}`}
      >
        {formattedDate}
      </StyledCellButton>
    </StyledCell>
  );
};

export default CalendarCell;
