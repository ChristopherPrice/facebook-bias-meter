import MockConfigUtil from "../util/mock-config-util";
import BiasIndicatorHelper from "../../src/js/client/bias-indicator-helper";

describe("BiasIndicatorHelper", () => {
  test("initConfigs", () => {
    let mockCallback = jest.fn();
    fetch.mockResponseOnce(JSON.stringify(MockConfigUtil.mockWellFormedConfigs()));

    BiasIndicatorHelper.initConfigs(mockCallback);
    process.nextTick(() => {
      expect(mockCallback).toBeCalled();
    })
  });
});
