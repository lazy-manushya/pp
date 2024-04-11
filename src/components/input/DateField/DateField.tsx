import React, { useCallback, useMemo, useState } from "react";

import TextField from "@/components/input/TextField";
import Calendar from "@/components/input/Calendar";
import Drawer from "@/components/misc/Drawer";

import { IDateFieldProps } from "./DateField.types";
import { formatDate } from "@/utils/date";

const DateField: React.FC<IDateFieldProps> = ({
  drawerProps,
  ...restProps
}) => {
  const { value: valueFromProps = "", onChange: onChangeFromProps } = restProps;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = useState(
    valueFromProps ? new Date(valueFromProps as string) : new Date()
  );

  const formattedDate = useMemo(
    () => (value ? formatDate(value) : ""),
    [value]
  );

  const toggle = useCallback(() => {
    setIsDrawerOpen((v) => !v);
  }, []);

  return (
    <>
      <TextField {...restProps} onClick={toggle} value={formattedDate} />
      <Drawer
        isOpen={isDrawerOpen}
        onRequestClose={toggle}
        drawerMidHeight="428px"
        headerProps={{ children: "Set deadlines" }}
      >
        <Calendar
          value={value}
          onChange={(value) => {
            setValue(value);
            if (onChangeFromProps) {
              onChangeFromProps(value.toISOString());
            }
          }}
        />
      </Drawer>
    </>
  );
};

export default DateField;
