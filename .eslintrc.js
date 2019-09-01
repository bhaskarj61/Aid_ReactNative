module.exports ={
  "extends": [
      "airbnb", 
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "import",
      "react-native"
  ],
  "env" : {
      "es6" : true,
      "browser": true
  },
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "implicit-arrow-linebreak": "off",
      "react-native/no-unused-styles": 1,
      "react-native/split-platform-components": 0,
      "react-native/no-inline-styles": 0,
      "react-native/no-color-literals": 0,
      "no-console": 1,
      "react/prop-types": 0,
      "react/no-string-refs": 1,
      "react/no-unescaped-entities": 0,
      "react/no-deprecated": 0,
      "react/destructuring-assignment": 0,
      "indent": [
        2,
        2,
        {
          "SwitchCase": 1
        }
      ],
      "global-require": 0,
      "import/newline-after-import": 0,
      "import/imports-first": 0,
      "react/sort-comp": 0,
      "brace-style": [
          "error",
          "stroustrup",
          {
              "allowSingleLine": true
          }
      ],
      "quotes": [
          "error",
          "single",
          {
              "allowTemplateLiterals": true
          }
      ],
      "object-shorthand": [
          "error",
          "consistent"
      ],
      "max-len": 0,
      "no-underscore-dangle": 0,
      "arrow-body-style": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "react/require-extension": 0,
      "react/display-name": 0
  },
  "globals": {
      "require": true,
      "global": true,
      "module": true,
      "expect": true,
      "jest": true,
      "it": true,
      "Promise": true
    }
}