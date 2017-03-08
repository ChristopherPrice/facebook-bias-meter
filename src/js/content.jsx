const BiasIndicatorHelper = require("./client/bias-indicator-helper").default;

window.addEventListener('load', () => {
    BiasIndicatorHelper.addIndicatorToArticles();
});
