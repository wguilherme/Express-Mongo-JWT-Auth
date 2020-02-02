const express = require('express')
//models
const Item = require('../models/Item')
const router = express.Router()
const middlewareAuth = require('../middleware/auth');
const auth = require('../middleware/auth')

router.post('/items', auth, async (req, res) => {
   // Create a new item
   try {
       const item = new Item({
        title: req.body.title,
        description: req.body.description,
        user: req.user._id
        })    

        //salva o item
        await item.save()

        //save item in the user
        user = req.user;
        console.log(user);
        
        user.items.push(item)
        await user.save()  
  
       res.status(201).send({item})
   } catch (error) {
       res.status(400).send(error)
   }
})

module.exports = router