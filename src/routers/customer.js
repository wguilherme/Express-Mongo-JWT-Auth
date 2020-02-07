import express from "express";

const router = express.Router();

// variables
const customers = [
    { id: 1, name: "Name 1", site: "http://google.com" },
    { id: 2, name: "Name 2", site: "http://microsoft.com" },
    { id: 3, name: "Name 3", site: "http://apple.com" },
];

// list all customers
router.get("/customers", (req, res) => {
    return res.json(customers);
});

// show customer by idd
router.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
});

// insert customer
router.post("/customers", (req, res) => {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

// update customer
router.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id: parseInt(id), name, site };
    }

    return res.status(status).json(customers[index]);
});

// delete customer
router.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

export default router;
