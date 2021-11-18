let buttonComponents = require('./src/tailwind/button')
let layoutComponents = require('./src/tailwind/layout')

let defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./**/*.liquid'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        serif: [...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      colors: (theme) => ({
        primary: {
          light: theme('colors.indigo.300'),
          DEFAULT: theme('colors.indigo.500'),
          dark: theme('colors.indigo.700'),
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms', {
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    buttonComponents,
    layoutComponents,
  ],
}
