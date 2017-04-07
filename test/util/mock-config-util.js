class MockConfigUtil {
  static mockWellFormedConfigs() {
    return {
      "politico": {
        "quality": 3,
        "bias": -1
      },
      "vox": {
        "quality": 2,
        "bias": -3
      },
      "breitbart": {
        "quality": 1,
        "bias": 3
      }
    };
  }

  static mockPoorlyFormedConfigs() {
    return {
      "politico": {
        "qaulity": 3,
        "bais": -1
      },
      "vox": {
        "quality": "good",
        "bias": "left"
      },
      "breitbart": {
        "quality": 8,
        "bias": 4
      }
    };
  }
}

module.exports = MockConfigUtil;
