/**
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended", // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "prettier/react",
  ],

  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier", "jest"],

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
     * Import plugin
     * The following rules are made available via `eslint-plugin-import`.
     */
    "import/extensions": "off",
    /**
     * Prettier plugin
     * The following rules are made available via `eslint-plugin-prettier`.
     */
    "prettier/prettier": "error",
    /**
     * jsx-a11y plugin
     * The following rules are made available via `eslint-plugin-jsx-a11y`.
     */
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/accessible-emoji": "off",
    /**
     * TypeScript ESLint
     * he following rules are made available via `@typescript-eslint/eslint-plugin`.
     */
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
