/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

module.exports = {
    "root": true,
    "plugins": ["node", "header", "jsdoc"],
    "extends": ["eslint:recommended", "plugin:node/recommended", "plugin:jsdoc/recommended"],
    "env": {
        "node": true,
        "es6": true,
    },
    "parserOptions": { "ecmaVersion": 2017 },
    "rules": {
        "quotes": ["error", "single"],
        "no-undef": "error",
        "no-extra-semi": "error",
        "semi": "error",
        "no-template-curly-in-string": "error",
        "no-caller": "error",
        "eqeqeq": "error",
        "global-require": "off",
        "brace-style": "error",
        "eol-last": "error",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-extra-bind": "warn",
        "no-empty": "off",
        "no-multiple-empty-lines": "error",
        "no-multi-spaces": "error",
        "no-process-exit": "warn",
        "space-in-parens": "error",
        "no-trailing-spaces": "error",
        "no-use-before-define": "off",
        "no-unused-vars": ["error", { "args": "none" }],
        "key-spacing": "error",
        "space-infix-ops": "error",
        "no-unsafe-negation": "error",
        "no-loop-func": "warn",
        "space-before-function-paren": ["error", "never"],
        "space-before-blocks": "error",
        "object-curly-spacing": ["error", "always"],
        "keyword-spacing": ["error", {
            "after": true
        }],
        "no-console": "off",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-property-description": "off",
        "jsdoc/require-returns-description": "off",
        // We use typescript-like literal `false` for some signatures, which is not yet supported natively by eslint-plugin-jsdoc
        "jsdoc/no-undefined-types": ["error", { definedTypes: ["false"] }],
        "node/no-unsupported-features": ["error", { version: 8 }],
        "node/no-deprecated-api": "error",
        "node/no-missing-import": "error",
        "node/no-missing-require": [
            "error",
            {
                "allowModules": [
                    "webpack"
                ]
            }
        ],
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-require": "error",
        "node/process-exit-as-throw": "error",
        "header/header": [2, "block", { "pattern": "This file is part of the Symfony Webpack Encore package" }]
    },
    "settings": {
        "jsdoc": {
            "mode": "typescript"
        }
    },
    "overrides": [
        {
            "files": [".eslintrc.js"],
            "rules": {
                "quotes": ["error", "double"],
            },
        }
    ],
};
