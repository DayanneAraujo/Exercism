export class Triangle {
  constructor(...sides) {
    const [a, b, c] = [...sides].sort();

    this.hasTriangleInequality = a + b >= c;
    this.areSidesBiggerThanZero = sides.every(x => x > 0);
    this.isValidTriangle = this.hasTriangleInequality && this.areSidesBiggerThanZero;
    this.sidesWithoutRepetitions = new Set(sides).size;
  }

  isEquilateral() {
    return this.isValidTriangle && this.sidesWithoutRepetitions === 1;
  }

  isIsosceles() {
    return this.isValidTriangle && this.sidesWithoutRepetitions <= 2;
  }

  isScalene() {
    return this.isValidTriangle && this.sidesWithoutRepetitions === 3;
  }
}
