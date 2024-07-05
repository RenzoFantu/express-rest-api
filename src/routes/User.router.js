const express = require ('express');
const router = express.Router();
const { getAllUsers, signUp, upDateUser, deleteUser, login} = require('../controllers/User.controller');
const auth =require('../middlewares/auth')

router.get('/', auth, getAllUsers);
router.post('/signup', signUp);
router.post('/login', login)
router.put('/', upDateUser)
router.delete('/', deleteUser)


module.exports = router