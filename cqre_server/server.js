// const fs = require('fs');
const sequelize = require('./models').sequelize;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000
const userController = require('./api/user')
const postController = require('./api/post')
const multer = require('multer');
const upload = multer({dest: './upload'})

const authd = require('./api/auth')

sequelize.sync()


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/image', express.static('./upload'));


// JWT middleware
app.use(authd.authMiddleware);

// User related API
app.post('/api/get_session', userController.getSession);
app.post('/api/regist_user', userController.createUser);

// Post related API
app.post('/api/getPosts', postController.getPosts);
app.post('/api/writePost', postController.writePost);
app.post('/api/getPost', postController.getPost);

// GET method related API
app.post('/api/getUserInfo', userController.getUserInfo);

// Post uploadImg related API
app.post('/api/post', upload.single('image'), postController.uploadImg);


app.listen(port, () => console.log(`Listening on port ${port}`))