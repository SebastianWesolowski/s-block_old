const packageJson = require("./package.json");

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-no-unresolved-module",
    "stylelint-no-unsupported-browser-features",
  ],
  rules: {
    "plugin/no-unresolved-module": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        browsers: packageJson.browserslist,
        ignorePartialSupport,
      },
    ],
  },
};
