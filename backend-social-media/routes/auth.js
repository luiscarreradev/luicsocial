const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
    // desctructurar
    const { username, email, password } = req.body;

    // validar existencia campos
    if (!username || !email || !password) {
        console.log("Field missed");
        return res
            .status(400)
            .json({ message: "All fields are required dude" });
    }

    try {
        // hashear el password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, email, password: hashedPassword });

        const userSaved = await user.save();

        return res.status(201).json(userSaved);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong and cannot creata the user",
            error: error.message,
        });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    // desctructurar
    const { email, password } = req.body;

    // validar existencia campos
    if (!email || !password) {
        console.log("Field missed");
        return res
            .status(400)
            .json({ message: "All fields are required dude" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword)
            return res.status(400).json({ message: "Wrong password" });

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong and cannot access",
            error: error.message,
        });
    }
});

module.exports = router;
