const { expect } = require("chai");
const mylib = require("../mylib");

describe("mylib", () => {
  before(() => {
    // ajetaan kerran ennen testejä
  });

  after(() => {
    // ajetaan kerran testien jälkeen
  });

  it("add: sums two numbers", () => {
    expect(mylib.add(2, 3)).to.equal(5);
  });

  it("sub: subtracts second number from first", () => {
    expect(mylib.sub(10, 4)).to.equal(6);
  });

  it("mul: multiplies two numbers", () => {
    expect(mylib.mul(6, 7)).to.equal(42);
  });

  it("div: divides first number by second", () => {
    expect(mylib.div(8, 2)).to.equal(4);
  });

  it("div: throws error when divisor is 0", () => {
    expect(() => mylib.div(5, 0)).to.throw("Division by zero is not allowed.");
  });
});
