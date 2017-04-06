let MockConfigUtil = require("../util/mock-config-util").default;
let BiasIndicatorHelper = require("../../src/js/client/bias-indicator-helper").default;

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
