'use strict';

module.exports = {
	"env" : {
		"node"    : true,
		"browser" : true,
		"amd"     : true,
		"mocha"   : true
	},

	"parserOptions" : {
		"ecmaVersion" : 6
	},

	"rules" : {

		// Possible Errors
		"comma-dangle"             : [ 2, "never" ],
		"no-cond-assign"           : [ 2, "always" ],
		"no-constant-condition"    : 2,
		"no-debugger"              : 2,
		"no-dupe-args"             : 2,
		"no-dupe-keys"             : 2,
		"no-duplicate-case"        : 2,
		"no-empty-character-class" : 2,
		"no-empty"                 : 2,
		"no-ex-assign"             : 2,
		"no-extra-boolean-cast"    : 2,
		"no-extra-semi"            : 2,
		"no-func-assign"           : 2,
		"no-inner-declarations"    : 2,
		"no-invalid-regexp"        : 2,
		"no-irregular-whitespace"  : 2,
		"no-negated-in-lhs"        : 2,
		"no-obj-calls"             : 2,
		"no-regex-spaces"          : 2,
		"no-sparse-arrays"         : 2,
		"use-isnan"                : 2,
		"valid-typeof"             : 2,

		// Best Practices
		"complexity"                  : [ 1, 14 ],
		"consistent-return"           : 2,
		"curly"                       : [ 0, "all" ],
		"dot-notation"                : 2,
		"eqeqeq"                      : 2,
		"guard-for-in"                : 2,
		"no-alert"                    : 2,
		"no-caller"                   : 2,
		"no-else-return"              : 2,
		"no-eq-null"                  : 2,
		"no-eval"                     : 2,
		"no-extend-native"            : 2,
		"no-floating-decimal"         : 2,
		"no-implied-eval"             : 2,
		"no-labels"                   : 2,
		"no-lone-blocks"              : 2,
		"no-loop-func"                : 2,
		"no-multi-spaces"             : 0,
		"no-native-reassign"          : 2,
		"no-new"                      : 2,
		"no-new-func"                 : 2,
		"no-proto"                    : 2,
		"no-redeclare"                : 0,
		"no-return-assign"            : 2,
		"no-script-url"               : 2,
		"no-self-compare"             : 2,
		"no-unused-expressions"       : 0,
		"no-with"                     : 2,
		"yoda"                        : [ 2, "never" ],
		"func-style"                  : [ "error", "expression" ],
		"space-before-function-paren" : [ "error", "always" ],
		"space-before-blocks"         : [ "error", "always" ],
		"prefer-spread"               : "error",
		"no-param-reassign"           : [ "error", { "props": false } ],
		"generator-star-spacing"      : [ "error", { "before": false, "after": true } ],
		"padded-blocks"               : [ "error", "never" ],

		// Strict Mode
		"strict"   : 2,

		// Variables
		"no-catch-shadow"            : 2,
		"no-shadow"                  : 0,
		"no-shadow-restricted-names" : 2,
		"no-undef"                   : 0,
		"no-undef-init"              : 2,

		"no-unused-vars"             : 2,
		"no-use-before-define"       : 0,

		// Node.js
		"handle-callback-err" : 0,
		"no-mixed-requires"   : [ 2, true ],
		"no-path-concat"      : 0,
		"no-process-exit"     : 2,

		// Stylistic Issues
		"brace-style"              : [ 2, "1tbs" ],
		"camelcase"                : 0,
		"consistent-this"          : [ 0, "self" ],
		"comma-spacing"            : 0,
		"key-spacing"              : [ 2, { "beforeColon" : true, "afterColon" : true, "align" : "colon" } ],
		"max-nested-callbacks"     : [ 1, 6 ],
		"new-cap"                  : 0,
		"new-parens"               : 2,
		"no-array-constructor"     : 2,
		"no-mixed-spaces-and-tabs" : 2,
		"no-nested-ternary"        : 0,
		"no-new-object"            : 2,
		"semi-spacing"             : 0,
		"no-spaced-func"           : 0,
		"no-ternary"               : 0,
		"no-trailing-spaces"       : 0,
		"no-underscore-dangle"     : 2,
		"no-extra-parens"          : 0,
		"one-var"                  : 0,
		"quote-props"              : 2,
		"quotes"                   : [ 2, "single", "avoid-escape" ],
		"semi"                     : 2,

		"object-curly-spacing"      : 0,
		"array-bracket-spacing"     : 0,
		"computed-property-spacing" : 0,

		"space-infix-ops" : 2,
		"keyword-spacing" : 2,
		"space-unary-ops" : [ 2, { "words" : true, "nonwords" : false } ],

		// Legacy
		"no-bitwise" : 0,
		"max-params" : [ 2, 15 ],

		//es6
		"prefer-const"           : "error",
		"no-const-assign"        : "error",
		"no-var"                 : "error",
		"no-new-object"          : "error",
		"object-shorthand"       : "error",
		"no-array-constructor"   : "error",
		"array-callback-return"  : "error",
		"prefer-template"        : "error",
		"template-curly-spacing" : "error",
		"no-useless-escape"      : "error",
		"prefer-rest-params"     : "error"
	}
};
