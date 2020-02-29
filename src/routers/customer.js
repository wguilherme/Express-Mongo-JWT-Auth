import express from "express";
import Faker from "faker";
import Customer from "../models/Customer";

const router = express.Router();

// variables
const customers = [
    {
        id: "c8efa077555e59d68b54cd89",
        name: "John Doe 1",
        job: "Software Engineer",
        site: "http://google.com",
    },
    {
        id: "555e59d68b54cc8efa077d89",
        name: "John Doe 2",
        job: "Founder of Google",
        site: "http://microsoft.com",
    },
    {
        id: "07755cd89c5e59d68b548efa",
        name: "John Doe 3",
        job: "Fullstack Freelancer",
        site: "http://apple.com",
    },
];

// list all customers
router.get("/customers", (req, res) => {
    return res.json(customers);
});

// show customer by idd
router.get("/customers/:id", (req, res) => {
    const { id } = req.params;
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

// generate customer
router.post("/generateCustomers", (req, res) => {
    async function generateProducts() {
        console.log("Enterd on the function");
        for (let i = 0; i < 10; i++) {
            const p = new Customer({
                name: Faker.name.firstName(),
                job: Faker.name.jobTitle(),
                site: Faker.internet.url(),
            });

            try {
                customers.push(p);
                // await p.save();
            } catch (err) {
                throw new Error("Error generating Products");
            }
        }
    }

    generateProducts();

    return res.status(201).json(customers);
});

// update customer
router.put("/customers/:id", (req, res) => {
    const { id } = req.params;
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id, name, site };
    }

    return res.status(status).json(customers[index]);
});

// delete customer
router.delete("/customers/:id", (req, res) => {
    const { id } = req.params;
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

export default router;
