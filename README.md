# Shopify Skeleton

Minimal Shopify theme based on the Theme Kit starter theme but converted to the Shopify 2.0 "Sections Everywhere" update

## Install

```
shopify theme init [name] -u https://github.com/markmead/shopify-skeleton.git
```

## Assets

To make the build process of CSS and JavaScript clearer the develpoment files are located in the `src` folder at the root of the project.

These files will be compiled into the `assets` folder which will contain minified versions.

### CSS

This theme uses Tailwind CSS and therefore PostCSS to compile the main `theme.css` file.

It includes the `postcss-nested` plugin so you can write nest CSS classes like:

```css
.form {
  .form-label {
    @apply text-sm block.;
  }

  .form-input {
    @apply w-full mt-1;
  }
}
```

It also includes the following Tailwind CSS plugins:

- Forms
- Typography
- Aspect Ratio

### JavaScript

This theme uses Rollup to compile JavaScript files.

It includes a `theme.js` file and a `product.js` file. If you wish to add more this can be done in the Rollup config like so:

```js
  {
    input: 'assets/[file].js',
    output: {
      file: 'src/[file].js',
      format: 'cjs',
    },
    plugins,
  },
```

## Serve

Once the project has been setup, run the following:

```shell
yarn
yarn js
yarn css
```

This will install the packages needed and start Rollup and PostCSS to compile and watch the files for changes.

Thanks to Shopify 2.0, changes to templates, sections and snippets will trigger the CSS to recompile.

_Note: `yarn js` and `yarn css` need to be in different terminal windows, they don't work well running in parallel`_

You can the run `shopify theme serve` to start up the Shopify server and view your theme 🥳
