let plugin = require('tailwindcss/plugin')

let layoutComponents = plugin(({ addComponents, theme }) => {
  let fluidContainer = {
    '.fluid-container': {
      margin: 'auto',
      maxWidth: theme('screens.xl'),
      padding: theme('spacing.4'),
    },
  }

  addComponents(fluidContainer)
})

module.exports = layoutComponents
