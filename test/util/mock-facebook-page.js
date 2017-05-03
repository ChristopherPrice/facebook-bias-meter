import MockConfigUtil from "./mock-config-util";

class MockFacebookPage {
  static mockArticleArray(numberOfArticles, numberConfigured) {
    let arrayOfArticles = new Array(numberOfArticles),
        configs = MockConfigUtil.mockWellFormedConfigs();

    for (let i=0; i<numberConfigured; i++) {
      let randomIndex = this._getRandomIndex(numberOfArticles);

      while (arrayOfArticles[randomIndex] != undefined) {
        randomIndex = (randomIndex + 1) % (numberOfArticles - 1);
      }

      arrayOfArticles[randomIndex] = this._mockArticle(configs[this._getRandomIndex(configs.length - 1)]["domain"]);
    }

    for (let j=0; j<numberOfArticles; j++) {
      if (!arrayOfArticles[j]) {
        arrayOfArticles[j] = this._mockArticle("google.com");
      }
    }

    return arrayOfArticles;
  }

  static _mockArticle(domain) {
    let div = document.createElement("div");
    div.className = "_2r3x";
    div.innerHTML = `<div class="_2r3x">
                            <div class="lfloat _ohe">
                              <span class="_3m6-">
                                <div class="_6ks">
                                  <a href="#" tabindex="-1" target="_blank" rel="nofollow noopener" >
                                    <div class="_6l- __c_">
                                      <div class="uiScaledImageContainer _6m5 fbStoryAttachmentImage" style="width:476px;height:249px;">
                                        <img class="scaledImageFitWidth img" src="#" alt="" width="476" height="249">
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="_3ekx _29_4"><div class="_6m3 _--6"><div class="mbs _6m6 _2cnj _5s6c">
                                    <a href="#" rel="nofollow noopener" target="_blank">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat.
                                    </a>
                                  </div>
                                  <div class="_6m7 _3bt9">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat.
                                  </div>
                                  <div class="_59tj _2iau">
                                    <div>
                                      <div class="_6lz _6mb ellipsis">
                                        ${domain}
                                      </div>
                                      <div class="">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a class="_52c6" href="#" tabindex="-1" target="_blank" rel="nofollow noopener">
                                </a>
                              </div>`;
      return div;
  }

  static _getRandomIndex(length) {
    return Math.floor(Math.random() * (length));
  }
}

module.exports = MockFacebookPage;
