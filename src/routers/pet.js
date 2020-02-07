const express = require("express");
//models
const router = express.Router();
const auth = require("../middleware/auth");
const Pet = require("../controllers/pet/pet");

router.get("/pets", Pet.list); //list all pets
router.get("/pets/search/:value", Pet.search); //create pet
router.post("/pets", auth, Pet.create); //create pet

module.exports = router;
