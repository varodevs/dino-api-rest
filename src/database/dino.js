const mongoose = require('mongoose');

const dinoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    length: String,
    height: String,
    weight: String,
    diet: String,
    geographical_distribution: String,
    period: String,
    curiosity: String
});

module.exports = mongoose.model('Dino', dinoSchema);