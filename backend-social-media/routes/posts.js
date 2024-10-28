const router = require("express").Router();
const Post = require("./../models/Post");

// CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        savedPost = await newPost.save();
        return res.status(201).json(savedPost);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

// UPDATE A POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.body.userId === post.userId) {
            await post.updateOne({
                $set: req.body,
            });
            res.status(200).json({
                status: 200,
                message: "the post has been updated",
            });
        } else {
            return res.status(403).json({
                status: 403,
                message: "You can only update your post",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            status: 404, message: "Post can't found"
        });
    }
});
// DELETE A POST
// LIKE A POST
// GET A POST
// GET TIMELINE POSTS

module.exports = router;
