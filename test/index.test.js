const expect = require("chai").expect;
const random = require("../lib/index");

describe("api -->", function() {
  describe("random function", function() {
    it("should return a random article item from API", function() {
      let randomItem = random;

      expect(randomItem).to.not.equal("");
    });
  });
});
