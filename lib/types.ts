import type antfu from '@antfu/eslint-config';
import type { OptionsConfig as AntfuOptionsConfig, TypedFlatConfigItem as AntfuTypedFlatConfigItem } from '@antfu/eslint-config';

type EslintConfigReturn = ReturnType<typeof antfu>;
type UserConfigParams = Parameters<typeof antfu>[1];

export interface OptionsConfig extends AntfuOptionsConfig, AntfuTypedFlatConfigItem {
  /**
   * Requires `react: true`
   *
   * Used recommended rules:
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules
   * @default false
   */
  jsxA11y?: boolean;
}

export type EslintConfig = (options: OptionsConfig, ...configs: UserConfigParams[]) => EslintConfigReturn;
