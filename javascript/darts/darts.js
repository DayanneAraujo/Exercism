
// Radius of a circle is
// (x - x0)**2 + (y - y0) **2 = r**2. where (x0, y0) is the center of the circle and r is its radius.
// Assuming that x0 and y0 are equals to 0
export const score = (x, y) => {
  const radius = Math.sqrt(x**2 + y**2)
  // inner circle --> 10
  if (radius <= 1){
    return 10;
  }
  // middle circle --> 5
  else if (radius <= 5){
    return 5;
  }
  // outer circle --> 1
  else if (radius <= 10){
    return 1;
  }
  // outside --> 0;
  return 0;
};
