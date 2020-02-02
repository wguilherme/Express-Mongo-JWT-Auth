const express = require('express')
//models
const router = express.Router()
const auth = require('../middleware/auth')
const Item = require('../controllers/item/item');

router.post('/items', auth, Item.create)
router.get('/items/find/user/:id', Item.itemByUser); //find by user
router.get('/items/find/:id', Item.userByItem); //find by item

module.exports = router