import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

import type { UserConfig } from '../types';

export const jsxA11yConfig: UserConfig = {
  name: 'endezz/jsx-a11y',
  plugins: {
    'jsx-a11y': pluginJsxA11y,
  },
  rules: pluginJsxA11y.flatConfigs.recommended.rules,
};
