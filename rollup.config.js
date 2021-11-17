import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'

const plugins = [
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

let files = ['theme', 'templates/product']

let config = []

files.forEach((file) => {
  let fileName = file.replace('templates/', '')

  config.push({
    input: `src/${file}.js`,
    output: {
      file: `assets/${fileName}.min.js`,
      format: 'cjs',
    },
    plugins,
  })
})

export default config
