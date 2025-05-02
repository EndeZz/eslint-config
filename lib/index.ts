import antfu from '@antfu/eslint-config'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'

import type { EslintConfig, OptionsConfig } from './types'

const baseConfig = {
  name: 'endezz/base',
  rules: {
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'no-console': 'warn',
    'style/comma-dangle': ['error', 'always-multiline'],
    'style/object-curly-newline': ['error', { multiline: true, consistent: true }],
  },
} satisfies OptionsConfig

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
} satisfies OptionsConfig

const eslintConfig: EslintConfig = ({ jsxA11y = false, ...options }, ...configs) => {
  if (jsxA11y && options.react) {
    const files = ['**/*.jsx']

    if (options.typescript) {
      files.push('**/*.tsx')
    }

    configs.unshift({
      name: 'endezz/jsx-a11y',
      files,
      plugins: {
        'jsx-a11y': pluginJsxA11y,
      },
      rules: pluginJsxA11y.flatConfigs.recommended.rules,
    })
  }

  const userConfigs = [baseConfig, sortConfig]

  return antfu(options, ...userConfigs, ...configs)
}

export default eslintConfig
