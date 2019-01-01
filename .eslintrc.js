module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    // modules: eslint-config-*
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:jsx-a11y/recommended",
    // "plugin:html",
    'prettier',  // for linting within eslint
    'prettier/react',  // for linting within eslint
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    // modules: eslint-plugin-*
    "html", // need to test this more...
    "react",
    "jsx-a11y",
    "prettier" // for linting within eslint
  ],
  rules: {
    // Run eslint-check from eslint-config-prettier to check for prettier conflicts
    //
    // "indent": [
    //     "error",
    //     2
    // ],
    // 'jsx-a11y/no-autofocus': 'error',
    // "linebreak-style": [
    //     "error",
    //     "windows"
    // ],
    "no-console": "off",
    // "no-floating-decimal": "error", // conflict prettier
    'no-implicit-coercion': 'error',
    // "quotes": [
    //     "error",
    //     "single"
    // ],
    // "semi": [
    //     "error",
    //     "always"
    // ],
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "trailingComma": "es5",
    //     "singleQuote": true,
    //     "printWidth": 80,
    //   }
    // ],
    "prettier/prettier": "error"
    // "wrap-iife": "error" // conflict prettier
  },
};
