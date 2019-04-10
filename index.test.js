const { main } = require("./index");

test("that it returns that json!!", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return {
      json: jest.fn(() => {
        return { hello: "world" };
      })
    };
  });
  const result = await main();
  expect(result).toEqual({ hello: "world" });

  global.fetch.mockRestore();
});
