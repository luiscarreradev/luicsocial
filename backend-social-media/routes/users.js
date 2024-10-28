const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// UPDATE USER
router.put("/:id", async (req, res) => {
    // verificar que el user solo actualice sus datos o sea admin
    if (req.body.userId === req.params.id || req.body.isAdmin) {
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
            .status(403)
            .json({ message: "You can only update your account" });
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);

            if (!deletedUser) {
                return res
                    .status(404)
                    .json({ status: 404, message: "User not found" });
            }

            return res.status(200).json(deletedUser);
        } catch (error) {
            return res
                .status(500)
                .json({ status: 500, message: "We coundn't delete the user" });
        }
    } else {
        return res
            .status(403)
            .json({ status: 403, message: "You can only delete your account" });
    }
});

// GET A USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean();

        if (!user) {
            return res
                .status(404)
                .json({ status: 404, message: "User not found" });
        }
        const { password, updatedAt, ...other } = user;
        return res.status(200).json(other);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ status: 500, message: "Server error" });
    }
});

// FOLLOW A USER
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                try {
                    await user.updateOne({
                        $push: {
                            followers: req.body.userId,
                        },
                    });
                    await currentUser.updateOne({
                        $push: {
                            followings: req.params.id,
                        },
                    });
                    return res
                        .status(201)
                        .json({
                            status: 201,
                            message: "User has been followed",
                        });
                } catch (error) {
                    console.log(error);
                    res.status(500).json({
                        status: 500,
                        message: "Something wrong happend",
                    });
                }
            } else {
                return res.status(403).json({
                    status: 403,
                    message: "You already follow this user",
                });
            }
        } catch (error) {
            console.log(error);
            first;
            return res.status(500).json(error);
        }
    } else {
        return res
            .status(403)
            .json({ status: 403, message: "You can't follow yourself" });
    }
});
// UNFOLLOW A USER
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                try {
                    await user.updateOne({
                        $pull: {
                            followers: req.body.userId,
                        },
                    });
                    await currentUser.updateOne({
                        $pull: {
                            followings: req.params.id,
                        },
                    });
                    return res
                        .status(201)
                        .json({
                            status: 201,
                            message: "User has been unfollowed",
                        });
                } catch (error) {
                    console.log(error);
                    res.status(500).json({
                        status: 500,
                        message: "Something wrong happend",
                    });
                }
            } else {
                return res.status(403).json({
                    status: 403,
                    message: "You dont follow this user",
                });
            }
        } catch (error) {
            console.log(error);
            first;
            return res.status(500).json(error);
        }
    } else {
        return res
            .status(403)
            .json({ status: 403, message: "You can't unfollow yourself" });
    }
});

module.exports = router;
