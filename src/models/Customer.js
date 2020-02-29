const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    job: {
        type: String,
        required: true,
    },
    site: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
