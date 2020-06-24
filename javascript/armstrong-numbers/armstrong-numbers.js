const sumExpDigits = (digits) => {
  return digits.reduce((acc, digit) => {
    acc += digit ** digits.length;
    return acc;
  }, 0);
};

export const isArmstrongNumber = (num) => {
  const digits = num.toString().split('');
  return sumExpDigits(digits) === num;
};
