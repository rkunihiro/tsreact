module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
    },
    plugins: ["@typescript-eslint", "react"],
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",

        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",

        "prettier",
        "prettier/@typescript-eslint",
    ],
    rules: {
        "react/prop-types": ["off"],

        // "no-console": ["warn"],
    },
};
