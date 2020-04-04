const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
    Comment.find()
    .then(alert('comment added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;

    const newComment = new Comment ({
        username,
        description
    });

    newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Comment.findById(req.params.id)
    .then(comment => {
        comment.username = req.body.username;
        comment.description = req.body.description;
        comment.save()
        .then(() => res.json('Comment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;