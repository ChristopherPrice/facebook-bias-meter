import BiasIndicatorHelper from "./client/bias-indicator-helper";

document.addEventListener('load', (event) => {
  BiasIndicatorHelper.initConfigs((retrievedConfigs) => {
    let configs = retrievedConfigs;
    BiasIndicatorHelper.addIndicatorToArticles(configs);

    // TODO would be preferable to use MutationObserver if not for the fact that it can not currently be tested using Jest
    document.addEventListener("DOMNodeInserted", (event) => {
      if (event.target.className === "_52c6") {
        BiasIndicatorHelper.addIndicatorToArticle(event.target);
      }
    });
  });
});
