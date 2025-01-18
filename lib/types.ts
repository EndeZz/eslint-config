import type antfu from '@antfu/eslint-config'
import type { OptionsConfig as AntfuOptionsConfig, TypedFlatConfigItem as AntfuTypedFlatConfigItem } from '@antfu/eslint-config'

type EslintConfigReturn = ReturnType<typeof antfu>
type UserConfigParams = Parameters<typeof antfu>[1]

export interface OptionsConfig extends AntfuOptionsConfig, AntfuTypedFlatConfigItem {
  jsxA11y?: boolean
}

export type EslintConfig = (options: OptionsConfig, ...configs: UserConfigParams[]) =>
EslintConfigReturn
