import { SuperOrSub } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(1 + 1).toEqual(2);
  });
});

jest.mock('../src');

it('should Mock B', () => {
  const functionNameMock = jest.fn();
  jest
    .spyOn(SuperOrSub.prototype, 'toggleSuperorSub')
    .mockImplementation(functionNameMock);
});

// import { ClassB } from "../src/class_b";
// jest.mock("../src/class_b");
// it("should mock class B", () => {
//   const functionNameMock = jest.fn();
//   jest.spyOn(ClassB.prototype, "functionName").mockImplementation(functionNameMock);
// });
