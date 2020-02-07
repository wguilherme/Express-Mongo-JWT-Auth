import express from "express";
import auth from "../middleware/auth";
import Pet from "../controllers/pet/pet";
// consts
const router = express.Router();

router.get("/pets", Pet.list); // list all pets
router.get("/pets/search/:value", Pet.search); // create pet
router.post("/pets", auth, Pet.create); // create pet

export default router;
