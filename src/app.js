import cors from "cors";
import userRouter from "./routers/user";
import itemRouter from "./routers/item";
import customerRouter from "./routers/customer";
import petRouter from "./routers/pet";

const express = require("express");

require("./db/db");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(itemRouter);
app.use(customerRouter);
app.use(petRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
