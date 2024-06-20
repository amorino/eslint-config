module.exports = {
  parser: "@typescript-eslint/parser",

  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },

  globals: {
    require: true,
    process: true,
  },

  plugins: ["import"],

  extends: ["plugin:prettier/recommended"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    /**
     * General
     */
    "no-undef": "off",
    "no-underscore-dangle": "off",
    /**
     * eslint-plugin-import
     */
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        /**
         * @typescript-eslint/eslint-plugin
         */
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
