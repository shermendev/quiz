const { getEslintAliases } = require('./config/aliases')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['css-modules', 'import', 'jsx-a11y', 'promise', 'react'],
  extends: [
    'plugin:css-modules/recommended',
    'react-app',
    'prettier',
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    'import/resolver': {
      alias: getEslintAliases()
    }
  },
  rules: {
    'no-underscore-dangle': 'off',
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: true
      }
    ],
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'no-continue': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'warn',
    'max-len': [
      'warn',
      {
        code: 120
      }
    ],
    'no-else-return': 'warn',
    'no-restricted-syntax': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'object-curly-newline': [
      'warn',
      {
        ExportDeclaration: {
          minProperties: 5,
          multiline: true
        },
        ObjectExpression: {
          minProperties: 1,
          multiline: true
        }
      }
    ],
    'operator-linebreak': 'off',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var', 'if', 'import', 'function', 'class', 'export', 'switch', 'for']
      },
      {
        blankLine: 'always',
        next: ['const', 'let', 'var', 'return', 'if', 'function', 'class', 'export', 'switch', 'for'],
        prev: '*'
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      },
      {
        blankLine: 'never',
        next: 'import',
        prev: 'import'
      },
      {
        blankLine: 'any',
        next: 'export',
        prev: 'export'
      }
    ],
    curly: 'warn',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    semi: ['error', 'never']
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
        quotes: ['warn', 'backtick'],
        'no-console': 'warn',
        'react/destructuring-assignment': 'warn',
        'react/display-name': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-sort-props': [
          'warn',
          {
            callbacksLast: true,
            reservedFirst: true,
            shorthandFirst: true
          }
        ],
        'react/state-in-constructor': ['error', 'never']
      }
    },
    {
      files: ['**/slices/*.js'],
      rules: {
        'no-param-reassign': 'off'
      }
    }
  ]
}
