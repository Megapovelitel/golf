const router1 = require('express').Router();
let Golf = require('../models/golf.model');

router1.route('/').get((req, res) => {
    Golf.find()
    .then(golfs => res.json(golfs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router1.route('/add').post((req, res) => {
    const series = req.body.series;
    const engine = req.body.engine;
    const description = req.body.description;
    const image = req.body.image;

    const newGolf = new Golf ({
        series,
        engine,
        description,
        image
    });

    newGolf.save()
    .then(() => res.json('Golf added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router1.route('/:id').get((req, res) => {
    Golf.findById(req.params.id)
    .then(golf => res.json(golf))
    .catch(err => res.status(400).json('Error: ' + err));
});

router1.route('/:id').delete((req, res) => {
    Golf.findByIdAndDelete(req.params.id)
    .then(() => res.json('golf deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router1.route('/update/:id').post((req, res) => {
    Golf.findById(req.params.id)
    .then(golf => {
        golf.series = req.body.series;
        golf.engine = req.body.engine;
        golf.description = req.body.description;
        golf.image = req.body.image;
        golf.save()
        .then(() => res.json('golf updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router1;