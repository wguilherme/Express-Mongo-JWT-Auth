import Pet from "../../models/Pet";
// const User = require('../../models/User')

module.exports = {
  create: async (req, res) => {
    try {
      const pet = new Pet({
        user: req.user._id,
        animal: req.body.animal,
        raca: req.body.raca,
        cor: req.body.cor,
        nome: req.body.nome,
        fotos: req.body.fotos,
        descricao: req.body.desricao,
        observacoes: req.body.observacoes,
        historia: req.body.historia
      });

      //save pet
      await pet.save();

      //save pet in the user
      user = req.user;
      //  console.log(user);

      //  user.pets.push(pet)
      //  await pet.save()

      res.status(201).send({ pet });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  list: async (req, res) => {
    let pet = await Pet.find();
    res.json(pet);

    // const status = pets ? 200 : 404;
    // return res.status(status).json(customer);
  },

  search: async (req, res) => {
    res.json("Search route");
  }
};
