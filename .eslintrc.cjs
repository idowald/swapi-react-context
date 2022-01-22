module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved" :"off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "no-debugger": "off",
  },
  "overrides": [
    {
      "files": [
        "**/*.test.ts",
        "**/*.test.tsx"
      ],
      "env": {
        "jest": true
      }
    }
  ],
  "globals":{
    "JSX": true
  }
};
