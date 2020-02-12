const mongoose = require("mongoose");
import mongoosePaginate from ("mongoosePaginate");


const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

ProductSchema.plugin(mongoosePaginate)

const Item = mongoose.model("Item", itemSchema);
export default Item;
