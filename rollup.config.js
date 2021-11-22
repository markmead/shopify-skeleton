import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'

let config = []

let jsPlugins = [
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }),
  resolve({ browser: true }),
  json(),
  commonjs(),
  uglify(),
  terser(),
]
let jsFiles = ['theme', 'templates/product', 'templates/addresses']

jsFiles.forEach((file) => {
  let fileName = file.replace('templates/', '')

  config.push({
    input: `src/${file}.js`,
    output: {
      file: `assets/${fileName}.min.js`,
      format: 'cjs',
      sourceMap: true,
    },
    plugins: jsPlugins,
  })
})

let cssFiles = ['theme', 'css/forms', 'css/account']

cssFiles.forEach((file) => {
  let fileName = file.replace('css/', '')

  config.push({
    input: `src/${file}.css`,
    output: { file: `assets/${fileName}.min.css` },
    plugins: [postcss({ extract: true })],
    onwarn: (warning, warn) => {
      if (warning.code === 'FILE_NAME_CONFLICT') return
      else warn(warning)
    },
  })
})

export default config
