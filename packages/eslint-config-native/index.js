module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier/react",
    "plugin:react-native/all",
    require.resolve("@amorino/eslint-config-base"),
  ],

  env: {
    "react-native/react-native": true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },

  ignorePatterns: ["/*.*"],

  plugins: ["react-native"],

  rules: {
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
     * React Native plugin
     * The following rules are made available via `@typescript-eslint/eslint-plugin`.
     */
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
