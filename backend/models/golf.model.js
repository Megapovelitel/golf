const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const golfSchema = new Schema({
    series: { type: String, required: true},
    engine: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
}, {
    timestamps: true,
});

const Golf = mongoose.model('Golf', golfSchema);

module.exports = Golf;