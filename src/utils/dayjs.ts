import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
dayjs.extend(isSameOrBefore);dayjs.extend(customParseFormat);

export default dayjs;

export function formatDate(date: string): string {
  return dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD");
}

export function isValidDate(date: string): boolean {
  const fDate = formatDate(date);
  return (dayjs(fDate).isValid()) && (dayjs(fDate).isSameOrBefore(dayjs()));
}