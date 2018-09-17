/**
 * 创建数据库中表操作
 *
 * @Author lcr
 * @CreateDate 18-9-9
 */
let db = require('./index.js');
db.sync({force: true}).then(function () {
    console.log('success');
});