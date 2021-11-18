let plugin = require('tailwindcss/plugin')

let baseFocus = {
  outline: 'none',
}

let buttonComponents = plugin(({ addComponents, theme }) => {
  let baseButton = {
    '.button': {
      fontWeight: theme('fontWeight.medium'),
      backgroundColor: theme('colors.white'),
      '&:focus': {
        ...baseFocus,
        boxShadow: `0 0 0 2px ${theme('colors.primary')}`,
      },
    },
  }

  addComponents(baseButton)
})

module.exports = buttonComponents
