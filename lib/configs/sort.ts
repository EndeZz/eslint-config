import type { UserConfig } from '../types';

export const sortImportsConfig: UserConfig = {
  name: 'endezz/sort/imports',
  rules: {
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
          ['internal', 'internal-type'],
          ['parent', 'parent-type', 'sibling', 'sibling-type', 'index', 'index-type'],
          'object',
          'style',
          'side-effect',
          'side-effect-style',
          'unknown',
        ],
        customGroups: {
          value: { react: ['^react$', '^react-.+'] },
          type: { react: ['^react$', '^react-.+'] },
        },
        internalPattern: ['^[~@#]/.*'],
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
};

export const sortPackageJsonConfig: UserConfig = {
  files: ['**/package.json'],
  name: 'endezz/sort/package.json',
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        order: { type: 'asc' },
        pathPattern: '^files$',
      },
    ],
    'jsonc/sort-keys': [
      'error',
      {
        order: [
          'name',
          'version',
          'private',
          'packageManager',
          'description',
          'type',
          'keywords',
          'license',
          'homepage',
          'bugs',
          'repository',
          'author',
          'contributors',
          'funding',
          'files',
          'main',
          'module',
          'types',
          'exports',
          'typesVersions',
          'sideEffects',
          'unpkg',
          'jsdelivr',
          'browser',
          'bin',
          'man',
          'directories',
          'publishConfig',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'optionalDependencies',
          'dependencies',
          'devDependencies',
          'engines',
          'config',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig',
          'prettier',
        ],
        pathPattern: '^$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
      },
      {
        order: ['types', 'require', 'import', 'default'],
        pathPattern: '^exports.*$',
      },
      {
        order: { type: 'asc' },
        pathPattern: String.raw`^(?:resolutions|overrides|pnpm\.overrides)$`,
      },
    ],
  },
};

export const sortTsConfig: UserConfig = {
  files: ['**/tsconfig.json', '**/tsconfig.*.json'],
  name: 'endezz/sort/tsconfig',
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        order: [
          'extends',
          'compilerOptions',
          'references',
          'files',
          'include',
          'exclude',
        ],
        pathPattern: '^$',
      },
      {
        order: [
          /* Projects */
          'incremental',
          'composite',
          'tsBuildInfoFile',
          'disableSourceOfProjectReferenceRedirect',
          'disableSolutionSearching',
          'disableReferencedProjectLoad',
          /* Language and Environment */
          'target',
          'jsx',
          'jsxFactory',
          'jsxFragmentFactory',
          'jsxImportSource',
          'lib',
          'moduleDetection',
          'noLib',
          'reactNamespace',
          'useDefineForClassFields',
          'emitDecoratorMetadata',
          'experimentalDecorators',
          /* Modules */
          'baseUrl',
          'rootDir',
          'rootDirs',
          'customConditions',
          'module',
          'moduleResolution',
          'moduleSuffixes',
          'noResolve',
          'paths',
          'resolveJsonModule',
          'resolvePackageJsonExports',
          'resolvePackageJsonImports',
          'typeRoots',
          'types',
          'allowArbitraryExtensions',
          'allowImportingTsExtensions',
          'allowUmdGlobalAccess',
          /* JavaScript Support */
          'allowJs',
          'checkJs',
          'maxNodeModuleJsDepth',
          /* Type Checking */
          'strict',
          'strictBindCallApply',
          'strictFunctionTypes',
          'strictNullChecks',
          'strictPropertyInitialization',
          'allowUnreachableCode',
          'allowUnusedLabels',
          'alwaysStrict',
          'exactOptionalPropertyTypes',
          'noFallthroughCasesInSwitch',
          'noImplicitAny',
          'noImplicitOverride',
          'noImplicitReturns',
          'noImplicitThis',
          'noPropertyAccessFromIndexSignature',
          'noUncheckedIndexedAccess',
          'noUnusedLocals',
          'noUnusedParameters',
          'useUnknownInCatchVariables',
          /* Emit */
          'declaration',
          'declarationDir',
          'declarationMap',
          'downlevelIteration',
          'emitBOM',
          'emitDeclarationOnly',
          'importHelpers',
          'importsNotUsedAsValues',
          'inlineSourceMap',
          'inlineSources',
          'isolatedDeclarations',
          'mapRoot',
          'newLine',
          'noEmit',
          'noEmitHelpers',
          'noEmitOnError',
          'outDir',
          'outFile',
          'preserveConstEnums',
          'preserveValueImports',
          'removeComments',
          'sourceMap',
          'sourceRoot',
          'stripInternal',
          /* Interop Constraints */
          'allowSyntheticDefaultImports',
          'esModuleInterop',
          'forceConsistentCasingInFileNames',
          'isolatedModules',
          'preserveSymlinks',
          'verbatimModuleSyntax',
          /* Completeness */
          'skipDefaultLibCheck',
          'skipLibCheck',
        ],
        pathPattern: '^compilerOptions$',
      },
    ],
  },
};
