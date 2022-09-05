export const useFormatNumber = (number: number) =>
  Number(number.toFixed(2).replace(".00", ""));
