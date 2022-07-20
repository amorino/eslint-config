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

  plugins: ["import", "unicorn", "babel"],

  extends: [
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
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
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          env: false,
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
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/prefer-module": "off",
    "unicorn/no-abusive-eslint-disable": "off",
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
         * TypeScript plugin
         * The following rules are made available via `@typescript-eslint/eslint-plugin`.
         */
        "@typescript-eslint/explicit-module-boundary-types": "off"
      },
    },
  ],
};
