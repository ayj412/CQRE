const router = require('express').Router()
const controller = require('./controller')

router.get('/register', controller.register)

module.exports = router