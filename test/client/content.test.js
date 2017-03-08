test("initializes the BiasIndicatorHelper on page load", () => {
    require("../../src/js/content");

    jest.mock("../../src/js/client/bias-indicator-helper");
    const BiasIndicatorHelper = require("../../src/js/client/bias-indicator-helper").default;
    BiasIndicatorHelper.addIndicatorToArticles = jest.fn();

    let onLoadEvent = document.createEvent("HTMLEvents");
    onLoadEvent.initEvent("load", false, false);

    window.dispatchEvent(onLoadEvent);

    expect(BiasIndicatorHelper.addIndicatorToArticles).toBeCalled();
});
