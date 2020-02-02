const Item = require('../../models/Item')

module.exports = {
    create : async (req, res) => {

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

    }
}


