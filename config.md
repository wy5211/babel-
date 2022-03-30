# babel

1. 只能转译简单的语法，无法转译 async await
```js
{
  "presets": ["@babel/env"]
}
```

2. 引入整个 `@babel/polyfill` ，相当于在入口处 `require('@babel/polyfill')`，会报   `@babel/polyfill is deprecated. Please, use required parts of core-js and regenerator-runtime/runtime` separately `
```js
{
  "presets": [[
    "@babel/env", {
      "useBuiltIns": "entry",
      "corejs": {
        "version": 3
      }
    }
  ]],
  "plugins": [
  ]
}
```


```js
{
  "presets": [
    [
      "@babel/env",
      {
        // "modules": false,
        "useBuiltIns": "usage",
        // "targets": {
        //   "chrome": 85
        // },
        "corejs": {
          "version": 3
        }
      }
    ]
  ],
  "plugins": [
   [
     "@babel/plugin-transform-runtime"
   ]
  ]
}
```
