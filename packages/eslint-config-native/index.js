module.exports = {
  extends: [
    "@react-native-community",
    "plugin:react-native/all",
    require.resolve("@amorino/eslint-config-base"),
  ],

  env: {
    "react-native/react-native": true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  ignorePatterns: ["/*.*"],

  plugins: ["react", "react-native"],

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
     * React Native plugin
     * The following rules are made available via `eslint-plugin-react-native`.
     */
    "react-native/no-raw-text": ["error", { skip: ["Animated.Text"] }],
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
            pattern: "react+(|-native)",
            group: "external",
            position: "before",
          },
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    "react/prop-types": "off",
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
      },
    },
  ],
};
