import type { UserConfig } from '../types';

export const stylisticConfig: UserConfig = {
  name: 'endezz/stylistic',
  rules: {
    'style/indent': ['error', 2, { SwitchCase: 1 }],
    'style/semi': ['error', 'always'],
    'style/no-tabs': 'error',
    'style/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'style/quote-props': ['error', 'as-needed'],
    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': 'error',
    'style/operator-linebreak': 'error',
    'style/comma-dangle': ['error', 'always-multiline'],
    'style/jsx-one-expression-per-line': 'off',
    'style/jsx-quotes': ['error', 'prefer-double'],
    'style/linebreak-style': ['error', 'unix'],
    'style/max-len': [
      'error',
      120,
      2,
      { ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],
    'style/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
    'style/multiline-ternary': 'off',
  },
};
