const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    let user = sequelize.define("User", {
        email: {
            filed: "email",
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(20),
            allowNull: false
        },
        username: {
            field: "username",
            type: DataTypes.STRING(20),
            allowNull: false
        },
        profileImg: {
            field: "profile_img",
            type: DataTypes.STRING(30),
        },
        enterYear: {
            field: "enter_year",
            type: DataTypes.STRING(4),
            allowNull: false
        },
        isActive: {
            field: "is_active",
            type: DataTypes.STRING(1),
            defaultValue: '0'
        },
        isStaff: {
            field: "is_staff",
            type: DataTypes.STRING(1),
        },
        isDelete: {
            field: "is_delete",
            type: DataTypes.STRING(1),
            defaultValue: 'N'
        },
        deleteIp: {
            field: "delete_ip",
            type: DataTypes.STRING(1)
        },
        deleteDate: {
            field: "delete_date",
            type: DataTypes.DATE
        },
        registDate: {
            field: "regist_date",
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now')
        },
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "tbl_user",
        timestamps: false,
    },
    
    );


    return user;
}