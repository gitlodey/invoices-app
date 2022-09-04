const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";

const randomLetter = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)];
const randomDigit = () => digits[Math.floor(Math.random() * digits.length)];

export const useInvoiceId = () => {
  return [
    randomLetter(),
    randomLetter(),
    randomDigit(),
    randomDigit(),
    randomDigit(),
    randomDigit(),
  ].join("");
};
