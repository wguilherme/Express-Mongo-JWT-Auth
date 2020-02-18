import express from "express";
import User from "../models/User";
import auth from "../middleware/auth";

const router = express.Router();
import Mail from '../lib/Mail';

router.post("/users", async (req, res) => {
    // Create a new user
    try {
        const { email, name, password } = req.body; //infos

        const user = new User({email, name, password});
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
        //after user creation





        console.log('User created!');

        await Mail.send({
            to: email,
            subject: "Account created! Welcome",
            text: `Hello ${name}, welcome to our  app`,
        })

        console.log('Mail sent');



    } catch (error) {
        res.status(400).send(error);
    }
});

// dsad

router.post("/users/login", async (req, res) => {
    // Login a registered user
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({
                error: "Login failed! Check authentication credentials",
            });
        }
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get current user
router.get("/users/me", auth, async (req, res) => {
    // View logged in user profile
    res.send(req.user);
});

router.post("/users/me/logout", auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token != req.token;
        });
        await req.user.save();
        res.json({ message: "User disconnected" });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/users/me/logoutall", auth, async (req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length);
        await req.user.save();
        res.json({ message: "User disconnected on all devices" });
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
