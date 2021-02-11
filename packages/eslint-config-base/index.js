module.exports = {
  parser: "@typescript-eslint/parser",

  env: {
    es2020: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },

  plugins: ["@typescript-eslint", "import"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],

  rules: {
    /**
     * General
     */
    "no-underscore-dangle": "off",
    /**
     * TypeScript plugin
     * The following rules are made available via `@typescript-eslint/eslint-plugin`.
     */
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["StrictPascalCase"],
      },
      {
        selector: "variable",
        format: ["strictCamelCase", "UPPER_CASE"],
      },
      {
        selector: "enumMember",
        format: ["StrictPascalCase"],
      },
    ],
    /**
     * Import plugin
     * The following rules are made available via `eslint-plugin-import`.
     */
    "import/order": [
      "error",
      {
        groups: ["external", "builtin", ["sibling", "parent"]],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
      },
    ],
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
