describe("main content script", () =>{
  test("finds articles and adds inidicator on page load", () => {
    require("../../src/js/content");

    jest.mock("../../src/js/client/bias-indicator-helper");
    const BiasIndicatorHelper = require("../../src/js/client/bias-indicator-helper").default;
    BiasIndicatorHelper.addIndicatorToArticles = jest.fn();

    let onLoadEvent = new Event("load");

    document.dispatchEvent(onLoadEvent);

    expect(BiasIndicatorHelper.addIndicatorToArticles).toBeCalled();
  });

  test("adds indicator to articles as they are added to the DOM", () => {
    require("../../src/js/content");

    jest.mock("../../src/js/client/bias-indicator-helper");
    const BiasIndicatorHelper = require("../../src/js/client/bias-indicator-helper").default;
    BiasIndicatorHelper.addIndicatorToArticle = jest.fn();

    let eventTarget = document.createElement("a");
    eventTarget.className = "_52c6";
    let onDomNodeInsertedEvent = new Event("DOMNodeInserted", {
      "bubbles": false,
      "target": eventTarget
    });
    // TODO better way of mocking DOMNodeInserted?
    Object.defineProperty(onDomNodeInsertedEvent, 'target', {value: eventTarget, enumerable: true});

    document.dispatchEvent(onDomNodeInsertedEvent);

    expect(BiasIndicatorHelper.addIndicatorToArticle).toBeCalled();
  });

  test("does not add indicator to non-articles as they are added to the DOM", () => {
    require("../../src/js/content");

    jest.mock("../../src/js/client/bias-indicator-helper");
    const BiasIndicatorHelper = require("../../src/js/client/bias-indicator-helper").default;
    BiasIndicatorHelper.addIndicatorToArticle = jest.fn();

    let eventTarget = document.createElement("a");
    eventTarget.className = "NOT-AN-ARTICLE";
    let onDomNodeInsertedEvent = new Event("DOMNodeInserted", {
      "bubbles": false,
      "target": eventTarget
    });
    // TODO better way of mocking DOMNodeInserted?
    Object.defineProperty(onDomNodeInsertedEvent, 'target', {value: eventTarget, enumerable: true});

    document.dispatchEvent(onDomNodeInsertedEvent);

    expect(BiasIndicatorHelper.addIndicatorToArticle).not.toBeCalled();
  });
});
