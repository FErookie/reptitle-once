/**
 * 配置文件
 *
 * @Author lcr
 * @CreateDate 18-9-9
 */

module.exports = {
    db: {
        name: 'postgres',
        username: 'postgres',
        pwd: 'gaoshuda',
        host: '127.0.0.1',
        port: '5432',
        database: 'shxdutNews',
        toString: function () {
            return this.name + '://' + this.username + ':' + this.pwd + '@' + this.host + ':' + this.port + '/' + this.database;
        }
    },
    type:{
        EDANotice:1
    }
};