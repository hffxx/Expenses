import { add } from "./utils";
describe("utils.js tests", () => {
  test("should add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
