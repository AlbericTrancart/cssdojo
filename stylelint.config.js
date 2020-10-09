module.exports = {
  plugins: ['stylelint-declaration-strict-value'],
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  rules: {
    // Giving false positives with styled-components
    'value-keyword-case': null,
    'declaration-no-important': true,
    'selector-max-id': 0,
    'selector-max-class': 2,
    'selector-max-type': 0,
    'scale-unlimited/declaration-strict-value': [
      [
        'font-size',
        'line-height',
        'z-index',
        'color',
        'background-color',
        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        'fill',
      ],
      {
        ignoreKeywords: ['transparent', 'inherit', 'initial', 'unset', 'none', 'currentColor'],
      },
    ],
  },
};
