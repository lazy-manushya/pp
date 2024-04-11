import React, { useMemo } from "react";
import { useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { createCalendar, CalendarDate } from "@internationalized/date";

import Button from "@/components/input/Button";

import {
  StyledButtonsContainer,
  StyledCalendarSection,
  StyledContainer,
  StyledHeader,
  StyledTitle,
} from "./Calendar.styles";
import { ICalendarProps } from "./Calendar.types";
import CalendarGrid from "./components/CalendarGrid";

const Calendar: React.FC<ICalendarProps> = (props) => {
  const { value: valueFromProps, onChange } = props;
  const { locale } = useLocale();

  const value = useMemo(
    () =>
      new CalendarDate(
        valueFromProps.getFullYear(),
        valueFromProps.getMonth(),
        valueFromProps.getDate()
      ),
    [valueFromProps]
  );

  const state = useCalendarState({
    value,
    onChange: (value) => {
      onChange(new Date(value.year, value.month, value.day));
    },
    locale,
    createCalendar,
  });

  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar({ value,onChange:(value) => {
      onChange(new Date(value.year, value.month, value.day));
    } }, state);

  return (
    <StyledContainer {...calendarProps} className="calendar">
      <StyledHeader className="header">
        <StyledTitle>{title}</StyledTitle>

        <StyledButtonsContainer>
          <Button
            useAria
            {...prevButtonProps}
            variant="ghost"
            colorVariant="black"
          >
            &lt;
          </Button>
          <Button
            useAria
            {...nextButtonProps}
            variant="ghost"
            colorVariant="black"
          >
            &gt;
          </Button>
        </StyledButtonsContainer>
      </StyledHeader>

      <StyledCalendarSection>
        <CalendarGrid state={state} />
      </StyledCalendarSection>
    </StyledContainer>
  );
};

export default Calendar;
