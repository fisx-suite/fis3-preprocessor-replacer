/**
 * @file fis 字符串替换 预处理插件
 * @author sparklewhy@gmail.com
 */

'use strict';

var _ = fis.util;

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

function replace(content, conf) {
    var from = conf.from;
    if (_.isString(from)) {
        from = new RegExp(_.escapeReg(from), 'g');
    }

    if (from && !_.isRegExp(from, 'RegExp')) {
        fis.log.error('fis3-preprocessor-replacer: option.from must a string or RegExp.');
    }
    else if (from) {
        content = content.replace(from, conf.to);
    }

    return content;
}

module.exports = function (content, file, conf) {
    if (!file.isText()) {
        return content;
    }

    if(conf.rules) {
        conf.rules.forEach(function(rule) {
            content = replace(content, rule);
        });
    }else{
        content = replace(content, {
            from: conf.from,
            to: conf.to
        })
    }

    if (conf.envify) {
        content = envify(content, {
            isProd: conf.isProd
        });
    }

    return content;
};

