module.exports = {
  env: {
    browser: true,
    jasmine: true,
  },
  extends: [
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  rules: {
    quotes: [2, "double"],
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0,
  },
  plugins: ["react"],
};
