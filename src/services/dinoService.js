const Dino = require('../database/dino');

const getAllDinos = async () => {
    const allDinos = await Dino.find()
    .exec();
    return allDinos;
}
const getOneDinoById = async (dinoId) => {

        const oneDino = await Dino.findById(dinoId).exec();
    
    return oneDino;
}
const getOneDinoByName = async (name) => {
    const regex = new RegExp(name, 'i');
        const oneDino = await Dino.findOne({ name: { $regex: regex } }).exec();
    
    return oneDino;
}
const createNewDino = async (newDino) => {
    const createdDino = await newDino.save()
    return createdDino;
}
const createManyDino = async (dinoArray) => {

    const validatedDinos = [];

        for (const dinoData of dinoArray) {
            // Create a new instance to validate against the schema
            const dino = new Dino(dinoData);
            await dino.validate(); // This will throw if validation fails
            validatedDinos.push(dinoData); // If valid, add to the array
        }
    try {
    const createdDinos = await Dino.insertMany(validatedDinos)
    return createdDinos;
} catch (error) {
    console.error('Insert error:', error);
    throw error; // Rethrow or handle error as appropriate
}
}
const updateOneDino = async (dinoId, updatedOps) => {
    const updateDino = await Dino.updateOne({_id: dinoId}, {$set: updatedOps}).exec();
    return updateDino;
}
const deleteOneDino = async (dinoId) => {
    const deletedDino = await Dino.deleteOne({_id: dinoId})
        .exec();
    return deletedDino;
}
const getAllSorted = async () => {
    const allSorted = await Dino.find().sort({ name: 1 })
        .exec();
    return allSorted;
}

const getRandomDino = async () => {
    const count = await Dino.countDocuments().exec();

    var random = Math.floor(Math.random() * count)
      
    const allRandom = await Dino.findOne().skip(random).exec();
    
    return allRandom;
}

module.exports = {
    getAllDinos,
    getOneDinoById,
    getOneDinoByName,
    getAllSorted,
    getRandomDino,
    createNewDino,
    createManyDino,
    updateOneDino,
    deleteOneDino
};