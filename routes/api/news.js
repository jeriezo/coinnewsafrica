const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Blog = require('../../models/Blog');

router.get('/', (req, res) => {
    Blog.find().limit(3)
        .sort({ created: -1 })
        .then(news => res.json(news));
});


router.post('/', auth, (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        body: req.body.body
    });
    newBlog.save().then(news => res.json(news));
});



router.delete('/:id', auth, (req, res) => {
    Blog.findById(req.params.id)
        .then(item => blog.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;