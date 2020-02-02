// // item.js
// const middlewareAuth = require('../middleware/auth');
// const express = require('express')
// const User = require('../models/User')
// // const auth = require('../middleware/auth')

// const router = express.Router()

// // create item
// router.post('/items', middlewareAuth.auth, (req, res) => {

//     console.log('post items')
  
//     const body = req.body;
  
//     const item = new Item({
//       title: body.title,
//       description: body.description,
//       price: body.price,
//       user: req.user._id
//     });

//     item.save( (err, savedItem) => {
  
//         if ( err ) { // Error Handling }
    
//         res.status(201).json({
//           ok: true,
//           item: savedItem,
//           userToken: req.user // for demo purpose
//         });
//       };
//     })
// })


// //exporta acesso
// module.exports = router