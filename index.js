/**
 * @file fis 字符串替换 预处理插件
 * @author sparklewhy@gmail.com
 */

'use strict';

/**
 * 基于字符串匹配方式替换环境变量
 *
 * @param {string} content 文件内容
 * @param {Object} options 替换选项
 * @param {boolean} options.isProd 是否是生产环境
 * @return {string}
 */
function envify(content, options) {
    var env = options.isProd ? 'production' : 'development';
    return content.replace(/process\.env\.NODE_ENV/g, '\'' + env + '\'');
}

function replace(content, rule) {
    var _ = fis.util;
    var from = rule.from;
    if (_.isString(from)) {
        from = new RegExp(_.escapeReg(from), 'g');
    }

    if (from && !_.isRegExp(from, 'RegExp')) {
        fis.log.error('fis3-preprocessor-replacer: option.from must a string or RegExp.');
    }
    else if (from) {
        content = content.replace(from, rule.to);
    }
    return content;
}

module.exports = function (content, file, conf) {
    if (!file.isText()) {
        return content;
    }

    var rules = conf.rules || [];
    if (!Array.isArray(rules)) {
        rules = [rules];
    }

    if (conf.from) {
        rules.push({
            from: conf.from,
            to: conf.to
        });
    }

    rules.forEach(function (item) {
        content = replace(content, item);
    });

    if (conf.envify) {
        content = envify(content, {
            isProd: conf.isProd
        });
    }

    return content;
};

