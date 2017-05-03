class MockConfigUtil {
  static mockWellFormedConfigs() {
    return [
      {
        "domain": "politico",
        "quality": 3,
        "bias": -1
      },
      {
        "domain": "vox",
        "quality": 2,
        "bias": -3
      },
      {
        "domain": "breitbart",
        "quality": 1,
        "bias": 3
      }
    ];
  }

  static mockPoorlyFormedConfigs() {
    return [
      {
        "domain": "politico",
        "qaulity": 3,
        "bais": -1
      },
      {
        "domain": "vox",
        "quality": "good",
        "bias": "left"
      },
      {
        "domain": "breitbart",
        "quality": 8,
        "bias": 4
      }
    ];
  }
}

module.exports = MockConfigUtil;
