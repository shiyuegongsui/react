

// 别名配置方式
// https://www.cnblogs.com/xiaohuochai/p/8491055.html

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
    config.resolve.alias = {
        '@': resolve('src'),
        '@views': resolve('src/views')

    }
    return config;
}