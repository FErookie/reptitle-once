/**
 * 开始文件
 *
 * @Author lcr
 * @CreateDate 18-9-9
 */
const app = require('./task/EDANotice');//导入测试文件

app().then(value => {
    console.log('success');
}).catch(err => {
    console.log(err.toString());
});