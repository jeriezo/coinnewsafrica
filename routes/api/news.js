const express = require('express');
//declare the router variable
const router = express.Router();
const auth = require('../../middleware/auth');

//getting our blog model from the 
const Blog = require('../../models/Blog');

//get all blogs
//access @all
router.get('/', (req, res) => {
    Blog.find()
        .sort({ created: -1 })
        .then(news => res.json(news));
});

//@route POST /api/news
//@desc post new items
//@access private

router.post('/', auth, (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        body: req.body.body
    });
    newBlog.save().then(news => res.json(news));
});

//@route DELETE api/items/:id
//@desc DELETE EXISTING item
//@access private

router.delete('/:id', auth, (req, res) => {
    Blog.findById(req.params.id)
        .then(item => blog.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;