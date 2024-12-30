import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginQuasar from "@quasar/app-vite/eslint";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
	{
		/**
		 * Ignore the following files.
		 * Please note that pluginQuasar.configs.recommended() already ignores
		 * the "node_modules" folder for you (and all other Quasar project
		 * relevant folders and files).
		 *
		 * ESLint requires "ignores" key to be the only one in this object
		 */
		// ignores: []
	},

	...pluginQuasar.configs.recommended(),
	js.configs.recommended,

	/**
	 * https://eslint.vuejs.org
	 *
	 * pluginVue.configs.base
	 *   -> Settings and rules to enable correct ESLint parsing.
	 * pluginVue.configs[ 'flat/essential']
	 *   -> base, plus rules to prevent errors or unintended behavior.
	 * pluginVue.configs["flat/strongly-recommended"]
	 *   -> Above, plus rules to considerably improve code readability and/or dev experience.
	 * pluginVue.configs["flat/recommended"]
	 *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
	 */
	...pluginVue.configs["flat/essential"],

	// https://github.com/vuejs/eslint-config-typescript
	...vueTsEslintConfig({
		// Optional: extend additional configurations from typescript-eslint'.
		// Supports all the configurations in
		// https://typescript-eslint.io/users/configs#recommended-configurations
		extends: [
			// By default, only the recommended rules are enabled.
			"recommended"
			// You can also manually enable the stylistic rules.
			// "stylistic",

			// Other utility configurations, such as 'eslintRecommended', (note that it's in camelCase)
			// are also extendable here. But we don't recommend using them directly.
		]
	}),

	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			// parserOptions: {
			// 	project: ["./tsconfig.json"]
			// },
			globals: {
				...globals.browser,
				...globals.node, // SSR, Electron, config files
				process: "readonly", // process.env.*
				ga: "readonly", // Google Analytics
				cordova: "readonly",
				Capacitor: "readonly",
				chrome: "readonly", // BEX related
				browser: "readonly" // BEX related
			}
		},

		// add your custom rules here
		rules: {
			// first parameter is always error level-> 0: off, 1: warn, 2: error
			"prefer-promise-reject-errors": "off",
			"no-tabs": "off",
			"no-mixed-spaces-and-tabs": "off",
			"space-before-function-paren": "off",
			"semi": "off",
			"no-useless-constructor": "off",
			"no-use-before-define": "off",
			"new-cap": "off",
			//-----------------------------------
			"no-extra-semi": "error",
			"semi-spacing": "error",
			"eqeqeq": "error",
			"curly": "error",
			"no-lonely-if": "error",
			"no-multi-spaces": "error",
			"space-before-blocks": "error",
			"key-spacing": "error",
			"space-infix-ops": "error",
			//-----------------------------------
			"no-void": [
				"error",
				{
					"allowAsStatement": true
				}
			],
			"object-curly-spacing": [
				"error",
				"always",
				{
					"objectsInObjects": true
				}
			],
			"indent": [
				"error",
				"tab",
				{
					"SwitchCase": 1,
					"MemberExpression": 1,
					"ArrayExpression": 1,
					"ObjectExpression": 1,
					"offsetTernaryExpressions": true
				}
			],
			"eol-last": [
				"error",
				"always"
			],
			"brace-style": [
				"error",
				"1tbs"
			],
			"quotes": [
				"error",
				"double"
			],
			"no-multiple-empty-lines": [
				"error",
				{
					"max": 1,
					"maxEOF": 0
				}
			],
			"keyword-spacing": [
				"error",
				{
					"before": true,
					"after": true
				}
			],
			//-----------------------------------
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			//-----------------------------------
			"@typescript-eslint/no-unused-vars": "warn",
			//-----------------------------------
			"@typescript-eslint/no-useless-constructor": "error",
			//-----------------------------------
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ prefer: "type-imports" }
			],
			"@typescript-eslint/no-inferrable-types": [
				"error",
				{
					"ignoreParameters": true,
					"ignoreProperties": true
				}
			],
			// "@typescript-eslint/restrict-template-expressions": [
			// 	"error",
			// 	{
			// 		"allowBoolean": true
			// 	}
			// ],
			//-----------------------------------
			"vue/html-indent": "off",
			"vue/multi-word-component-names": "off",
			"vue/attribute-hyphenation": "off",
			"vue/no-v-model-argument": "off",
			"vue/max-attributes-per-line": "off",
			//-----------------------------------
			"vue/html-closing-bracket-newline": [
				"error",
				{
					"singleline": "never",
					"multiline": "never"
				}
			],
			"vue/first-attribute-linebreak": [
				"error",
				{
					"singleline": "beside",
					"multiline": "beside"
				}
			],

			// allow debugger during development only
			"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
		}
	},

	{
		files: ["src-pwa/custom-service-worker.ts"],
		languageOptions: {
			globals: {
				...globals.serviceworker
			}
		}
	}
];
