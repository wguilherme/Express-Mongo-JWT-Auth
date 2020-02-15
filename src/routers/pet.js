import express from "express";
import auth from "../middleware/auth";
import Pet from "../controllers/pet/pet";
import multer from "multer";
import multerConfig from "./../config/multer"
// consts
const router = express.Router();

router.get("/pets", Pet.list); // list all pets
router.post("/pets", auth, multer(multerConfig).single('file'), Pet.create); // create pet

//search and filters
router.get("/pets/search/raca", Pet.searchAnimal); // filterByAnimal
router.get("/pets/search/:value", Pet.search); // create pet

export default router;
