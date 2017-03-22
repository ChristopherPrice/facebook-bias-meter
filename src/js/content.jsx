const BiasIndicatorHelper = require("./client/bias-indicator-helper").default;

document.addEventListener('load', () => {
    BiasIndicatorHelper.addIndicatorToArticles();
});

document.addEventListener("DOMNodeInserted", (event) => {
  if (event.target.className === "_52c6") {
    BiasIndicatorHelper.addIndicatorToArticle();
  }
});
