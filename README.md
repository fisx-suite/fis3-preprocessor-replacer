fis3-preprocessor-replacer [![NPM Version](https://img.shields.io/npm/v/fis3-preprocessor-replacer.svg?style=flat)](https://npmjs.org/package/fis3-preprocessor-replacer)
======
> A preprocessor for fis3 to replace string content

## How to use

### Install

```shell
npm install fis3-preprocessor-replacer --save-dev
```

### Add configure to fis-conf.js

```js
fis.match('src/**.js', {
    preprocessor: fis.plugin('replacer', {
        from: /xxx/g, // or string
        to: 'xxx'
    })
});
```

### Multi-replace

```js
fis.match('src/**.js', {
    preprocessor: fis.plugin('replacer', {
        rules： [{
        	from: /xxx/g, // or string
        	to: 'xxx'
        }, {
        	from: /yyy/g, // or string
        	to: 'yyy'
        }]
    })
});
```

### Options

* from - `string|RegExp`: the regexp or string to replace

* to - `string`: the content to replace from

* rules - `array`: multi-replace rule

* envify - `boolean`: whether to replace the `process.env.NODE_ENV` with the constant plain string, the string value is determined by the `isProd' option

* isProd - `isProd`: whether in production environment

## Relevant

* [fis3-deploy-replace](https://github.com/fex-team/fis3-deploy-replace)
