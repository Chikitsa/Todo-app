const Router = require('express')
const router = Router()

const {createTodo} = require('../Controller/todo.controller')
const {getTodo} = require('../Controller/todo.controller')

router.post('/createTodo',createTodo)
router.get('/getTodo',getTodo)

module.exports = router;
