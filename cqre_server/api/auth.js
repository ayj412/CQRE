const { User, sequelize } = require('../models')
const jwt = require("jsonwebtoken");
const common = require("../config/common");
let crypto = require("crypto");




// JWT middleware
const authMiddleware = (req, res, next) => {
    var token = req.cookies['user'];

    if (typeof token !== 'undefined') {
        console.log("defiend token")
        try {
            var decoded = jwt.verify(token, common.secret)
            console.log( decoded );
        } catch (err) {
            res.clearCookie("user");
            next();
            return 'clearCookie';
        }
        User.findOne({ where: {id: decoded.id} }).then(function (user) {
            res.cookie("user", getToken(user.id));
            next();
        }).catch(function (err) {
            console.log('400 err', err)
            res.status(400).send(err.message);
        });
    } else {
        console.log("not defined token")
        next();
        // res.sendStatus(403);
    }
    
}

const getToken = (id) => {
    console.log("ididid", id)
    var token = jwt.sign({
        id: id
    }, common.secret, {
        expiresIn: '2h'
      });
    return token;
}

const getTokenDecode = (token, callback) => {
    var decoded = jwt.verify(token, common.secret)
    User.findOne({ raw: true, where: {id: decoded.id}, attributes: [ 'username', 'profile_img', 'enter_year', 'email', [sequelize.fn('concat', sequelize.fn('substring', sequelize.col('User.enter_year'), 3, 4), ' ', sequelize.col('User.username')), 'user']] }).then(function (user) {
        callback(user)
    }).catch(function (err) {
        console.log('400 err', err)
        res.status(400).send(err.message);
    });
}

/*

const getTokenDecode = await (token, callback) => {
    var decoded = jwt.verify(token, common.secret)
    async User.findOne({ where: { id: decoded.id }, 
        attributes: ['username', 'profile_img', 'enter_year', 'email', 
        [sequelize.fn('concat', sequelize.fn('substring', sequelize.col('User.enter_year'), 3, 4), ' ', 
        sequelize.col('User.username')), 'user']] })
    .then(function (user) {
        callback(user)
    }).catch(function (err) {
        console.log('400 err', err)
        res.status(400).send(err.message);
    });
}

*/

const createHashPassword = (password, callback) => {
    crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(password, buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
            callback(key.toString('base64')+":"+buf.toString('base64'))
        });
    });
}

module.exports = {
    authMiddleware,
    getToken,
    createHashPassword,
    getTokenDecode
}