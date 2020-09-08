const common = require('../config/common');
const auth = require('./auth');
const { User, sequelize } = require('../models')



// create user api

const createUser = (req, res) => {
    let userEmail = req.body.user.userId;
    let userPw = req.body.user.userPw;
    let userName = req.body.user.userName;
    let userEnterDate = req.body.user.userEnterDate;
    let hashedPw = '';

    User.findOrCreate({
        raw: true,
        where : { email: userEmail },
        defaults: { email: userEmail, password: userPw, username: userName, enterYear: userEnterDate },
    })
    .then((rows) => {
        if( rows[1] == false ){
            res.send({ 'result': common.CODE_ID_DUPLICATE });
        }
        if( rows[1] == true) {
            res.send({ 'result': common.CODE_SUCCESS });
        }
    })
    .catch((err) => {
        res.send({ 'result': common.CODE_FAIL });
    })
}

// after login get sessionapi
const getSession = (req, res) => {
	let email = req.body.user.userEmail;;
    let userPw = req.body.user.userPw;

    User.findOne({
        raw: true,
        where: { email: email }
    }).then(function(user) {
        if(user && userPw === user.password){
            res.cookie("user", auth.getToken(user.id));
            res.send({'result': common.CODE_SUCCESS});
        }else{
            res.send({'result': common.CODE_NOTFOUND})
        }
    }).catch(function(err) {
        res.send({'result': common.CODE_NOTFOUND})
    });
}

// after login get sessionapi
const getUserInfo = (req, res, callback) => {
    auth.getTokenDecode(req.body.userToken.user, function(user_info){
        res.send({'user_info': user_info})
    })
    // 
}

module.exports = {
    getSession,
    createUser,
    getUserInfo
}