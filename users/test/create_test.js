const assert = require("assert");
const User = require("../src/user");

describe("creating record", () => {
  it("saves a user", () => {
    const rupesh = new User({
      name: "Rupesh"
    });
    rupesh.save();
  });
});
