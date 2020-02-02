const express = require('express')
//models
const router = express.Router()
const auth = require('../middleware/auth')
const Item = require('../controllers/item/item');

router.post('/items', auth, Item.create)

module.exports = router