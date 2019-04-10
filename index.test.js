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
  expect(global.fetch.mock.calls).toHaveLength(1);
  global.fetch.mockRestore();
});
