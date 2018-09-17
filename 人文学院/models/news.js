/**
 * Created by LZJ on 2015/7/23.
 */

module.exports = function (sequelize, DataTypes) {

    var News = sequelize.define('News', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        // 标题
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        // 原访问地址
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true
            }
        },
        // 时间
        time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        // 时间字符串，用于去重
        dateStr: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        // 内容
        body: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // 附件， json对象，包括文件名和链接
        fileLinks: {
            type: DataTypes.JSON,
            allowNull: true
        },
        // 类型
        type: {
            type: DataTypes.INTEGER
        },
        // 出处
        from: {
            type: DataTypes.STRING
        },
        clickCount: {
            type: DataTypes.INTEGER
        },
        author: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: false
        },
        updateCount: {
            type: DataTypes.INTEGER,
            defaultValue: 300,
            //对已有的内容进行更新,次数限制用于使过时的新闻不再更新次数
        },
        /**
         * 是否在用户端显示
         * 1：显示
         * 2: 不显示*/
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        alreadyPushed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        timestamps: false,
        hooks: {
            //有重名则把之前的通知视为不可见
            beforeCreate: function (news) {
                return News.update({
                    status: 2
                }, {
                    where: {
                        title: news.title
                    }
                });
            }
        }
    });
};