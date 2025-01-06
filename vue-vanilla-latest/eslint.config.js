import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
	{
		name: "app/files-to-lint",
		files: ["**/*.{ts,mts,tsx,vue}"],
	},

	{
		name: "app/files-to-ignore",
		ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
	},

	...pluginVue.configs["flat/essential"],
	...vueTsEslintConfig(),
	{
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
	}
];
