const countNodes = require("./countNodes");

test("calculate 365 days starting with 1000 nodes", () => {
  const nodes = countNodes(15100, 25, 365, 1000);
  expect(nodes).toBe(1829);
});

test("calculate 40 days starting with 1537 nodes", () => {
  const nodes = countNodes(15100, 25, 40, 1537);
  expect(nodes).toBe(1642);
});
