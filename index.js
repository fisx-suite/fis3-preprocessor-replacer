/**
 * @file fis 字符串替换 预处理插件
 * @author sparklewhy@gmail.com
 */

'use strict';

module.exports = function (content, file, conf) {
    if (!file.isText()) {
        return content;
    }

    var _ = fis.util;
    var from = conf.from;
    if (_.isString(from)) {
        from = new RegExp(_.escapeReg(from), 'g');
    }

    if (!_.isRegExp(from, 'RegExp')) {
        fis.log.error('fis3-preprocessor-replacer: option.from must a string or RegExp.');
    }

    return content.replace(from, conf.to);
};

