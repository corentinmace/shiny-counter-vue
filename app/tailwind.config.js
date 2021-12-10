const colors = require('tailwindcss/colors')
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary'),
      tertiary: withOpacityValue('--color-tertiary'),
      text_primary: withOpacityValue('--text-color-primary'),
      text_secondary: withOpacityValue('--text-color-secondary'),
      text_tertiary: withOpacityValue('--text-color-tertiary'),
      text_light: withOpacityValue('--text-color-light'),
      text_black: withOpacityValue('--text-black'),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
