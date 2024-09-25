module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended', 
    '@payloadcms',   
    "prettier"
  ],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', "validate-jsx-nesting"],
  rules: {
    'prettier/prettier': 0,
    'no-console': 'off',
    '@next/next/no-img-element': 'off',
    "validate-jsx-nesting/no-invalid-jsx-nesting": "error",
	"extends": [
    "prettier"
  ]
  },

}
