const sayHello = require("./hello");

test("returns Hello World", () => {
  expect(sayHello()).toBe("Hello World!");
});
