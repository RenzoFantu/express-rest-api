const express = require ('express')
const router = express.Router()
const {createCategory, getCategory} = require ('../controllers/Category.controller')
const auth = require ( '../middlewares/auth');

router.post ('/',auth ,createCategory);
router.get ('/',auth ,getCategory);

module.exports = router