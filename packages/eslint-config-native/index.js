"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",

  env: {
    node: true,
    "jest/globals": true,
    "react-native/react-native": true,
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

  ignorePatterns: ["/*.*"],

  plugins: ["@typescript-eslint", "react-native"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "@react-native-community",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],

  rules: {
    /**
     * General
     */
    "no-underscore-dangle": "off",
    /**
     * React Plugin
     * The following rules are made available via `eslint-plugin-react`.
     */
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        custom: "ignore",
      },
    ],
    "react/no-unescaped-entities": "off",
    /**
     * Prettier plugin
     * The following rules are made available via `eslint-plugin-prettier`.
     */
    "prettier/prettier": "error",

    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-native/no-raw-text": [
      2,
      {
        skip: ["Animated.Text"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
