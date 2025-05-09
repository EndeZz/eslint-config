import antfu from '@antfu/eslint-config';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

import type { EslintConfig, OptionsConfig } from './types';

const baseConfig = {
  name: 'endezz/base',
  rules: {
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'no-console': 'warn',
  },
} satisfies OptionsConfig;

const sortConfig = {
  name: 'endezz/sort',
  rules: {
    'jsonc/sort-keys': 'off',
    'perfectionist/sort-array-includes': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'react',
          'type',
          ['builtin', 'external'],
          'internal-type',
          ['internal'],
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'style',
          'side-effect-style',
          'unknown',
        ],
        customGroups: {
          value: { react: ['^react$', '^react-.+'] },
          type: { react: ['^react$', '^react-.+'] },
        },
        internalPattern: ['^~/.*', '^@/.*'],
        newlinesBetween: 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        groups: ['unknown', 'method', 'multiline'],
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
        customGroups: {
          callback: 'on*',
          reserved: ['key', 'ref'],
        },
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        groups: [
          'conditional',
          'function',
          'import',
          'intersection',
          'keyword',
          'literal',
          'named',
          'object',
          'operator',
          'tuple',
          'union',
          'nullish',
        ],
        order: 'asc',
        specialCharacters: 'keep',
        type: 'alphabetical',
      },
    ],
  },
} satisfies OptionsConfig;

const stylisticConfig = {
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
} satisfies OptionsConfig;

const eslintConfig: EslintConfig = ({ jsxA11y = false, stylistic = false, ...options }, ...configs) => {
  if (jsxA11y && options.react) {
    const files = ['**/*.jsx'];

    if (options.typescript) {
      files.push('**/*.tsx');
    }

    configs.unshift({
      name: 'endezz/jsx-a11y',
      files,
      plugins: {
        'jsx-a11y': pluginJsxA11y,
      },
      rules: pluginJsxA11y.flatConfigs.recommended.rules,
    });
  }

  if (stylistic) {
    configs.unshift(stylisticConfig);
  }

  const userConfigs = [baseConfig, sortConfig];

  return antfu({ ...options, stylistic }, ...userConfigs, ...configs);
};

export default eslintConfig;
