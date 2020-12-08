module.exports = {
  root: true,
  extends: ["ecubelabs", "ecubelabs/typescript"],
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
  },
  rules: {
    "no-useless-constructor": "off",
    "no-empty-function": ["error", { allow: ["constructors"] }],
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.spec.ts"] },
    ],
  },
};
