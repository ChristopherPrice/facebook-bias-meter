class BiasIndicatorHelper {
  static initConfigs() {
    return new Promise((resolve, reject) => {
      fetch('../../../config/config.json')
        .then((response) => {
          resolve(response.blob());
        })
        .catch((error) => {
          reject(Error("Error loading configs: " + error.message));
        });
    });
  }

  static addIndicatorToArticles() {

  }

  static addIndicatorToArticle() {

  }
}

module.exports = BiasIndicatorHelper;
