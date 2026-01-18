import type antfu from '@antfu/eslint-config';
import type { OptionsConfig as AntfuOptionsConfig } from '@antfu/eslint-config';

type EslintConfigReturn = ReturnType<typeof antfu>;
export type UserConfig = Parameters<typeof antfu>[1];

export interface Options extends AntfuOptionsConfig {
  /**
   * Requires `react: true`
   *
   * Used recommended rules:
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules
   * @default false
   */
  jsxA11y?: boolean;
}

export type EslintConfig = (options: Options, ...configs: UserConfig[]) => EslintConfigReturn;
