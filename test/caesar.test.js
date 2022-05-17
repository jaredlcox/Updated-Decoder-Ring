// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it ("return false if shift is 0, less than -25, greater than 25, or not present", () => {
    const actual = caesar("thing", 0)    
    const expected = false;
expect(actual).to.eql(expected);
});
 
  it("ignores capital letters", () => {
       const actual = caesar("AbCD", 1);
    const expected = "bcde";
    expect(actual).to.eql(expected);
});
  it("wraps around the end of the alphabet", () => {
    const actual = caesar ("xyz", 4)
    const expected = "bcd";
    expect(actual).to.eql(expected);
});
  it("wraps around the beginning of the alphabet", () => {
    const actual = caesar("abc", -4)
    const expected = "wxy";
    expect(actual).to.eql(expected);
  });
 it("should maintain spaces & other symbols in the message", () => {
   const actual = caesar("ab cd ef", 2)
   const expected = "cd ef gh";
   expect(actual).to.equal(expected);
 });
});
