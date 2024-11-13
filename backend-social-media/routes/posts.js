const router = require("express").Router();
const User = require("../models/User");
const Post = require("./../models/Post");

// CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
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
            status: 404,
            message: "Post can't found",
        });
    }
});

// DELETE A POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.body.userId === post.userId) {
            await post.deleteOne();
            res.status(200).json({
                status: 200,
                message: "the post has been deleted",
            });
        } else {
            return res.status(403).json({
                status: 403,
                message: "You can only delete your post",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            status: 404,
            message: "Post not found",
        });
    }
});

// LIKE | DISLIKE A POST
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            return res
                .status(201)
                .json({ status: 201, message: "This post has been liked" });
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            return res
                .status(201)
                .json({ status: 201, message: "This post has been disliked" });
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({ status: 404, message: "Post not found" });
    }
});

// GET A POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (err) {
        return res.status(404).json({ status: 404, message: "Post not found" });
    }
});

// GET TIMELINE POSTS
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
               return Post.find({ userId: friendId });
            })
        );
        return res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        return res.status(500).json({ status: 500, message: "No posts yet" });
    }
});

module.exports = router;