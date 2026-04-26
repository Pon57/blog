import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import eslintReact from '@eslint-react/eslint-plugin'
import prettierConfig from 'eslint-config-prettier/flat'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['next.config.js', 'next-env.d.ts', '.next/**', 'out/**', 'node_modules/**'],
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
    },
    {
        files: ['**/*.{tsx,jsx}'],
        ...eslintReact.configs.recommended,
    },
    {
        files: ['**/*.{tsx,jsx}'],
        plugins: { 'react-hooks': reactHooks },
        rules: {
            ...reactHooks.configs.recommended.rules,
            '@eslint-react/error-boundaries': 'off',
            '@eslint-react/exhaustive-deps': 'off',
            '@eslint-react/purity': 'off',
            '@eslint-react/rules-of-hooks': 'off',
            '@eslint-react/set-state-in-effect': 'off',
            '@eslint-react/set-state-in-render': 'off',
            '@eslint-react/unsupported-syntax': 'off',
            '@eslint-react/use-memo': 'off',
        },
    },
    {
        plugins: { '@next/next': nextPlugin },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
    prettierRecommended,
    prettierConfig,
)
