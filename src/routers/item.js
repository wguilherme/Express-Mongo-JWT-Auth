import express from "express";
import auth from "../middleware/auth";
import Item from "../controllers/item/item";
// consts
const router = express.Router();

router.post("/items", auth, Item.create);
router.get("/items/find/user/:id", Item.itemByUser); // find by user
router.get("/items/find/:id", Item.userByItem); // find by item

export default router;
