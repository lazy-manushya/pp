import { useCalendarGrid, useLocale } from "react-aria";
import { getWeeksInMonth } from "@internationalized/date";

import CalendarCell from "../CalendarCell";
import { StyledTable } from "./CalendarGrid.styles";

const CalendarGrid = ({ state, ...props }: any) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    { weekdayStyle: "short" },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <StyledTable {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* @ts-ignore */}
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date: any, i: number) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default CalendarGrid;
