import { expect } from "chai";
import { hchange } from "./hchange.js";

//test suit for shuffle function
describe("background color", () => {
  it("should change create a 6digit hex code", () => {
    const backgroundColor1 = hchange();
    const backgroundColor2 = hchange();

    console.log(backgroundColor1, backgroundColor2);
    console.log("color1", backgroundColor1, "color2", backgroundColor2);

    expect(backgroundColor1).to.not.equal(backgroundColor2);
  });
});
