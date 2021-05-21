module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
    require.resolve("@amorino/eslint-config-base"),
  ],

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },

  rules: {
    /**
     * React Plugin
     * The following rules are made available via `eslint-plugin-react`.
     */
    "react/display-name": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "react/no-unescaped-entities": "off",
    "react/no-this-in-sfc": "error",
    "react/no-unused-prop-types": "error",
    /**
     * jsx-a11y plugin
     * The following rules are made available via `eslint-plugin-jsx-a11y`.
     */
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/accessible-emoji": "off",
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
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
            filter: {
              regex: "^(Component|App|Page|AppTree)$",
              match: false,
            },
          },
          {
            selector: "typeLike",
            format: ["StrictPascalCase"],
          },
          {
            selector: "variable",
            // Exception for FunctionComponents
            format: ["camelCase", "StrictPascalCase", "UPPER_CASE"],
          },
          {
            selector: "function",
            // Exception for FunctionComponents
            format: ["strictCamelCase", "StrictPascalCase"],
          },
          {
            selector: "enumMember",
            format: ["StrictPascalCase"],
          },
        ],
      },
    },
  ],
};
