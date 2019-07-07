module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jest": true,
      "node": true
    },
    "extends": "eslint:recommended",
    "parser": 'babel-eslint',
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "allowImportExportEverywhere": true
    },
    "rules": {
      "no-console": 'warn',
    }
};
