import dayjs from "dayjs";

export const useFormatDate = (date: string) => {
  return dayjs(date).format("D MMM YYYY");
};

export const useCurrentDate = () => {
  return dayjs().format("YYYY-MM-DD");
};

export const useAddDays = (date: string, daysQuantity: number) => {
  return dayjs(date).add(daysQuantity, "days").format("YYYY-MM-DD");
};

export const useDifference = (startDate: string, endDate: string) => {
  return dayjs(endDate).diff(dayjs(startDate), "days");
};
