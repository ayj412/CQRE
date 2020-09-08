const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    let post = sequelize.define("Post", {
        type: {
            filed: "type",
            type: DataTypes.STRING(20)
        },
        thumbnail: {
            field: "thumbnail",
            type: DataTypes.STRING(40)
        },
        title: {
            field: "title",
            type: DataTypes.STRING(50),
            allowNull: false
        },
        content: {
            field: "content",
            type: DataTypes.STRING(15000),
        },
        summary: {
            field: "summary",
            type: DataTypes.STRING(100),
        },
        commentCnt: {
            field: "comment_cnt",
            type: DataTypes.STRING(10),
            defaultValue: '0'
        },
        likeCnt: {
            field: "like_cnt",
            type: DataTypes.STRING(10),
            defaultValue: '0'
        },
        userId: {
            field: "user_id",
            type: DataTypes.STRING(10)
        },
        registDate: {
            field: "regist_date",
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            get: function() {
                return moment(this.getDataValue('DateTime')).format('YYYY년 MM월 DD일')
             }
        },
        modifyDate: {
            field: "modify_date",
            type: DataTypes.DATE
        },
        deleteYn: {
            field: "delete_yn",
            type: DataTypes.STRING(1),
            defaultValue: 'N'
        },
        deleteDate: {
            field: "delete_date",
            type: DataTypes.DATE
        },
        
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "tbl_post",
        timestamps: false,
    });

    return post;
}