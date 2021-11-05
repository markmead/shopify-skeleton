import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from '@rollup/plugin-json'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  babel({ exclude: 'node_modules/**' }),
  resolve({ browser: true }),
  json(),
  commonjs(),
  uglify(),
  process.env.NODE_ENV === 'production' && terser(),
]

export default [
  {
    input: 'src/theme.js',
    output: {
      file: 'assets/theme.min.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    input: 'src/templates/product.js',
    output: {
      file: 'assets/product.min.js',
      format: 'cjs',
    },
    plugins,
  },
]
