// test
const { Circle, Square, Triangle } = require('./lib/shapes');

// Test for a blue circle
describe("Shapes", () => {
  describe("Circle", () => {
    it("should create a blue circle", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="blue" />'
      );
    });
  });

  // Test for a blue square
  describe("Square", () => {
    it("should create a blue square", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<rect x="60" y="10" width="180" height="180" fill="blue" />'
      );
    });
  });

  // Test for a blue triangle      
  describe("Triangle", () => {
    it("should render a blue Triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
}); 