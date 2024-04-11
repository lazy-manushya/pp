import dayjs from "dayjs";

import { DATE_DISPLAY_FORMAT } from "@/config/data";

export function formatDate(date: string | Date, format = DATE_DISPLAY_FORMAT) {
  if (!date) return "";

  date = new Date(date);
  const dateDayJs = dayjs(date);

  return dateDayJs.format(format);
}
