const commonRules = {
  "import/prefer-default-export": 0,
  "react/jsx-props-no-spreading": 0,
  "class-methods-use-this": 0,
  "react/function-component-definition": 0,
  "no-restricted-export": 0,
  "react/prop-types": 0,
};
const developmentRules = {
  "@typescript-eslint/explicit-module-boundary-types": "warn",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-unused-vars": ["warn", { args: "after-used" }],
  "import/no-cycle": "warn",
  "jsx-a11y/anchor-is-valid": "warn",
  "prettier/prettier": "warn",
  "react/jsx-filename-extension": [
    "warn",
    { extensions: [".jsx", ".tsx"], allow: "as-needed" },
  ],
  "react-hooks/rules-of-hooks": "warn",
  "react-hooks/exhaustive-deps": "warn",
  "consistent-return": "warn",
  curly: ["warn", "all"],
  eqeqeq: ["warn", "always"],
  "max-lines": ["warn", { max: 500, skipBlankLines: true, skipComments: true }],
  "max-lines-per-function": [
    "warn",
    { max: 128, skipBlankLines: true, skipComments: true },
  ],
  "no-console": ["warn", { allow: ["warn", "error"] }],
  "no-debugger": "warn",
  "no-restricted-imports": [
    "warn",
    {
      paths: [
        {
          name: "lodash",
          message: "Use lodash-es instead.",
        },
        {
          name: "react-dom",
          message: "Use ReactDOM instead.",
        },
      ],
      patterns: [
        {
          group: ["../../*, !images"],
          message: "Agreed maximum of 1 level back to import.",
        },
        {
          group: ["images/*"],
          message: "image need relative imports.",
        },
      ],
    },
  ],
  "no-useless-return": "warn",
  "padding-line-between-statements": [
    "warn",
    { blankLine: "always", prev: ["*"], next: "return" },
    { blankLine: "always", prev: ["block-like"], next: "*" },
  ],
};

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint",
    "import",
    "sonarjs",
    "jest",
    "jest-formatting",
    "prettier",
  ],
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended",
    "plugin:compat/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    React: true,
    JSX: true,
    window: true,
    document: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    polyfills: ["fetch"],
  },
  rules: {
    ...commonRules,
    ...developmentRules,
  },
  overrides: [
    {
      files: ["./**/*.spec.ts", "./**/*.spec.tsx", "./**/*.stories.*"],
      rules: {
        "sonarjs/no-duplicate-string": 0,
        "sonarjs/cognitive-complexity": 0,
        "sonarjs/no-identical-functions": 0,
        "no-template-curly-in-string": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "max-lines-per-function": 0,
        "no-console": 0,
        "react/jsx-no-constucted-contex-value": 0,
        "compat/compat": 0,
        "import/no-anonymous-default-export": 0,
      },
    },
  ],
};
