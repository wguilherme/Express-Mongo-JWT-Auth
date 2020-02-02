const Item = require('../../models/Item')
const User = require('../../models/User')

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

    },

   //retorna usuário de acordo com o item
    userByItem : async (req,res) =>{    
      const { id } = req.params;
      // res.json(req.params)
      // get user by id
      let user = await Item.findById(id).populate('user');


      //get some only some values
      user = {
         name: user.user.name,
         email: user.user.email,
         id: user.user._id
      }

      //return
      res.json(user);
  },


   //retorna usuário de acordo com o item
    itemByUser : async (req,res) =>{    

      const { id } = req.params;

      const currentUser = User.findById(id);
      
   
      Item.find({user:id}, (e, items) => {
         // however you handle errors goes first
         res.json({currentUser: req.user, items: items});
      });
      
  },





   //retorna usuário de acordo com o item
//     backupItemByUser : async (req,res) =>{    
//       const { id } = req.params;
//       const {items} = await User.findById(id).populate('item');
//       res.send(items);
//   }
}

