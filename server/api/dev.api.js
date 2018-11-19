// dev.api.js

const express = require('express'),
    mongoose = require('mongoose'),
    Dev = mongoose.model('Dev'),
    router = express.Router();

router.get('/', (req, res) => {
    Dev.find()
        .exec()
        .then((devs) => {
            res.status(200).json(devs);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.get('/:id', (req, res) => {
    Dev.findById(req.params.id)
        .exec()
        .then((devs) => {
            res.json(devs);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    var dev = new Dev(req.body);

    dev.save()
        .then(() => {
            res.status(200).json(dev);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    Dev.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then((dev) => {
            res.status(200).json(dev);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    Dev.findByIdAndRemove(req.params.id)
        .exec()
        .then((dev) => {
            res.status(200).json(dev);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;
