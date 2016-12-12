fis3-preprocessor-replacer
======
[![Dependency Status](https://david-dm.org/wuhy/fis3-preprocessor-replacer.svg)](https://david-dm.org/wuhy/fis3-preprocessor-replacer) [![devDependency Status](https://david-dm.org/wuhy/fis3-preprocessor-replacer/dev-status.svg)](https://david-dm.org/wuhy/fis3-preprocessor-replacer#info=devDependencies) [![NPM Version](https://img.shields.io/npm/v/fis3-preprocessor-replacer.svg?style=flat)](https://npmjs.org/package/fis3-preprocessor-replacer)

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

### Options

* from - `string|RegExp`: the regexp or string to replace

* to - `string`: the content to replace from

## Relevant

* [fis3-deploy-replace](https://github.com/fex-team/fis3-deploy-replace)
