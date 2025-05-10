import antfu from '@antfu/eslint-config';

import { baseConfig, jsxA11yConfig, sortImportsConfig, sortPackageJsonConfig, sortTsConfig, stylisticConfig } from './configs';
import type { EslintConfig } from './types';

const eslintConfig: EslintConfig = (userOptions, ...userConfigs) => {
  const {
    jsxA11y = false,
    stylistic = false,
    jsonc = false,
    ...options
  } = userOptions;

  const configs = [baseConfig, sortImportsConfig];

  if (jsxA11y && options.react) {
    const files = ['**/*.jsx'];

    if (options.typescript) {
      files.push('**/*.tsx');
    }

    configs.push({
      files,
      ...jsxA11yConfig,
    });
  }

  if (stylistic) {
    configs.push(stylisticConfig);
  }

  if (jsonc) {
    configs.push(...[sortPackageJsonConfig, sortTsConfig]);
  }

  return antfu({ ...options, stylistic }, ...configs, ...userConfigs);
};

export default eslintConfig;
