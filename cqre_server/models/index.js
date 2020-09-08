const Sequelize = require('sequelize')
const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
const db = {}

const sequelize	= new Sequelize(
	config.database, config.username, config.password, config, { operatorsAliases: false }
)
sequelize.options.logging = false

db.sequelize = sequelize
db.Sequelize = Sequelize

// 테이블
db.User	= require('./user')(sequelize, Sequelize)
db.Post = require('./post')(sequelize, Sequelize)


// User => Point 1:N (userId)
db.User.hasMany(db.Post)
db.Post.belongsTo(db.User)

module.exports = db


// // User => Document 1:N (userId)
// db.User.hasMany(db.Document)
// db.Document.belongsTo(db.User)
// // Category => Document 1:N (categoryId)
// db.Category.hasMany(db.Document)
// db.Document.belongsTo(db.User)

// // Comment  => CommentList 1:N (commentId)
// db.Comment.hasMany(db.CommentList)
// db.CommentList.belongsTo(db.Comment)
// // Document => CommentList 1:N (documentId)
// db.Document.hasMany(db.CommentList)
// db.CommentList.belongsTo(db.Document)


