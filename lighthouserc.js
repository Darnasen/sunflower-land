module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      // preset: "lighthouse:recommended",
      budgetsFile: "./budget.json",
    },
  },
};
