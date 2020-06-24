export const gigasecond = (date) => {
  // getTime() returns time in miliseconds, so need to multiply by 1000 to operate
  // in the same time unit, since it was given that 1 gigaSecond is 1 sec * 10 ** 9
  const GIGASECOND_IN_MS = 1000 * 10 ** 9;
  return new Date(date.getTime() + GIGASECOND_IN_MS);
};