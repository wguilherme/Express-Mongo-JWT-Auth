import Pet from "../../models/Pet";
import User from "../../models/User";

// const User = require('../../models/User')

module.exports = {

    create: async (req, res) => {

        //destructuring req.file
        const {originalName: name, size, filename: key } = req.file;
        try {
            const pet = new Pet({
                user: req.user._id,
                animal: req.body.animal,
                raca: req.body.raca,
                cor: req.body.cor,
                nome: req.body.nome,
                //fotos
                name,
                size,
                key,
                url: "",
                descricao: req.body.descricao,
                observacoes: req.body.observacoes,
                historia: req.body.historia,
            });




            // save pet
            await pet.save();

            // save pet in the user
            const user = req.user;


            user.pets.push(pet);
            await user.save();

            res.status(201).send({ pet });


        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
    },

    list: async (req, res) => {
        const pet = await Pet.find();
        res.json(pet);

        // const status = pets ? 200 : 404;
        // return res.status(status).json(customer);
    },

    search: async (req, res) => {
        res.json("Search route");
    },

    searchAnimal: async (req, res) => {


        const animal = req.body.animal;

        const result = await Pet.find({animal: animal});

        res.json(result)


    }
};
