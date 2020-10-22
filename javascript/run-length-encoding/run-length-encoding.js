
export const encode = data => {
  const re = /([\w\s])\1+/g
  return data.replace(re, (repetition, char) => `${repetition.length}${char}`);
};

export const decode = data => {
  const re = /(\d+)([\w\s])/g
  return data.replace(re, (match, group_digit, group_char) => group_char.repeat(group_digit));
};
