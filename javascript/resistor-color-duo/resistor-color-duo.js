import { colorCode } from '../resistor-color/resistor-color.js';

export const decodedValue = ([color1, color2]) => {
  return color2
    ? colorCode(color1.toLowerCase()) * 10 + colorCode(color2.toLowerCase())
    : colorCode(color1.toLowerCase());
};
