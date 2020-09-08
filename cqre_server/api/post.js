const common = require('../config/common');
const { Post, User, sequelize } = require('../models')

// get all post
const getPosts = (req, res) => {
    Post.findAll({
        include: [{
          model: User,
          attributes: []
         }],
         attributes: ['id', 'thumbnail', 'title', 'summary', 'comment_cnt', 'like_cnt',
         [sequelize.fn('concat', sequelize.fn('substring', sequelize.col('User.enter_year'), 3, 4),' ',sequelize.col('User.username')),'user' ],
         [sequelize.fn('date_format', sequelize.col('Post.regist_date'), '%Y년 %c월 %e일'), 'regist_date']
        ],
         raw: true
      }).then(posts => {
        res.send(posts)
    });
}

// get one post by post id
const getPost = (req, res) => {
    Post.findAll({
        where: { id: req.body.postId },
        include: [{
            model: User,
            attributes: []
        }],
        attributes: ['title', 'content',
            [sequelize.fn('concat', sequelize.fn('substring', sequelize.col('User.enter_year'), 3, 4), ' ', sequelize.col('User.username')), 'user'],
            [sequelize.fn('date_format', sequelize.col('Post.regist_date'), '%Y년 %c월 %e일'), 'regist_date']
        ],
        raw: true
    }).then(post => {
        console.log(post)
        res.send(post)
    });
}

const uploadImg = (req, res) => {
    res.send(req.file.filename)
}

// write post
const writePost = (req, res) => {
    var postTitle = req.body.postTitle
    var postContent = req.body.postContent
    var thumbnail = req.body.thumbnail
    var postSummary = req.body.postSummary

    console.log('postTitle => ', postTitle);
    console.log('postContent => ', postContent);
    console.log('thumbnail => ', thumbnail);
    console.log('postSummary => ', postSummary);

    Post.create({
        title: postTitle,
        thumbnail: thumbnail,
        content: postContent,
        summary: postSummary,
        userId: '1',
        type: 'web',
    });
}

module.exports = {
    getPosts,
    writePost,
    getPost,
    uploadImg
}