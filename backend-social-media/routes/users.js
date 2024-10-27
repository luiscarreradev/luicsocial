const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// UPDATE USER
router.put("/:id", async (req, res) => {
    // verificar que el user solo actualice sus datos o sea admin
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        // si el pass viene en la solitud hay que hashearla
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res
            .status(500)
            .json({ message: "You can only update your account" });
    }
});

module.exports = router;
