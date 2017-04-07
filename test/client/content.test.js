jest.mock("../../src/js/client/bias-indicator-helper");

import BiasIndicatorHelper from "../../src/js/client/bias-indicator-helper";
import MockConfigUtil from "../util/mock-config-util";

describe("main content script", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("loads configs on page load", () => {
    require("../../src/js/content");

    BiasIndicatorHelper.initConfigs = jest.fn();

    let onLoadEvent = new Event("load");

    document.dispatchEvent(onLoadEvent);

    expect(BiasIndicatorHelper.initConfigs).toBeCalled();
  });

  test("finds articles and adds inidicator on page load", () => {
    require("../../src/js/content");

    const mockWellFormedConfigs = MockConfigUtil.mockWellFormedConfigs();
    BiasIndicatorHelper.addIndicatorToArticles = jest.fn();
    BiasIndicatorHelper.initConfigs = jest.fn((callback) => {
      callback(mockWellFormedConfigs);
    });

    let onLoadEvent = new Event("load");

    document.dispatchEvent(onLoadEvent);

    expect(BiasIndicatorHelper.addIndicatorToArticles).toBeCalledWith(mockWellFormedConfigs);
  });

  test("adds indicator to articles as they are added to the DOM", () => {
    require("../../src/js/content");

    BiasIndicatorHelper.addIndicatorToArticle = jest.fn().mockImplementationOnce();

    let eventTarget = document.createElement("a");
    eventTarget.className = "_52c6";
    let onDomNodeInsertedEvent = new Event("DOMNodeInserted", {
      "bubbles": false,
      "target": eventTarget
    });
    // TODO better way of mocking DOMNodeInserted?
    Object.defineProperty(onDomNodeInsertedEvent, 'target', {value: eventTarget, enumerable: true});

    document.dispatchEvent(onDomNodeInsertedEvent);

    expect(BiasIndicatorHelper.addIndicatorToArticle).toBeCalledWith(eventTarget);
  });

  test("does not add indicator to non-articles as they are added to the DOM", () => {
    require("../../src/js/content");

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
