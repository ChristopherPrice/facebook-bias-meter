import MockConfigUtil from "../util/mock-config-util";
import MockFacebookPage from "../util/mock-facebook-page";
import BiasIndicatorHelper from "../../src/js/client/bias-indicator-helper";

describe("BiasIndicatorHelper initConfigs", () => {
  test("fetches the config file", () => {
    fetch.mockResponseOnce(JSON.stringify(MockConfigUtil.mockWellFormedConfigs()));

    BiasIndicatorHelper.initConfigs();
    expect(fetch).toBeCalledWith("../../../config/config.json");
  });

  // TODO skipping until jest 20.0 allows for async testing
  test.skip("resolves the promise if configs are well-formed", async () => {
    const mockWellFormedConfigs = MockConfigUtil.mockWellFormedConfigs();
    fetch.mockResponseOnce(JSON.stringify(mockWellFormedConfigs));

    await expect(BiasIndicatorHelper.initConfigs()).resolves.toEqual(mockWellFormedConfigs);
  });
});

describe("BisIndicatorHelper addIndicatorToArticles", () => {
  test("adds one indicator to page with one article", () => {

  });
});
