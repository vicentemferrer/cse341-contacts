const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginPrettier = require('eslint-plugin-prettier/recommended');

/** @type {import('eslint').Linter.Config[]} */
exports = [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  pluginPrettier
];
