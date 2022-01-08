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
    ecmaFeatures: {
      jsx: true,
    },
  },

  globals: {
    require: true,
    process: true,
  },

  plugins: ["import", "unicorn", "babel"],

  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript"
  ],

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
     * Import plugin
     * The following rules are made available via `eslint-plugin-import`.
     */
    "import/prefer-default-export": "off",
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
        format: ["PascalCase"],
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
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          ref: false,
          refs: false,
          prop: false,
          props: false,
          src: false,
          param: false,
          params: false,
          args: false,
          elm: {
            element: true,
          },
        },
        allowList: {
          attr: true,
          argTypes: true,
        },
        checkProperties: true,
      },
    ],
    "unicorn/no-null": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/prefer-module": "off",
    "unicorn/no-abusive-eslint-disable": "off",
  },
};
