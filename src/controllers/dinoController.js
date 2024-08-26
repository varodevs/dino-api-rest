const dinoService = require("../services/dinoService");
const Dino = require('../database/dino');
const mongoose  = require("mongoose");

const getAllDinos = (req, res) => {
    dinoService.getAllDinos()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

const getOneDinoById = (req, res) => {
    const dinoId = req.params.dinoId;

    const oneDino = dinoService.getOneDinoById(dinoId)
    .then(doc => {
        res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const getOneDinoByName = (req, res) => {
    const name = req.params.dinoName;
    // const encodedName = encodeURIComponent(name);
    // console.log(encodedName);
    const oneDino = dinoService.getOneDinoByName(name)
    .then(doc => {
        res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const getDinoSorted = (req, res) => {
    const randomDino = dinoService.getAllSorted()
    .then(docs => {
        res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const getRandomDino = (req, res) => {
    const randomDino = dinoService.getRandomDino()
    .then(doc => {
        res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const createNewDino = (req, res) => { 
    const newDino = new Dino({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        description: req.body.description,
        length: req.body.length,
        height: req.body.height,
        weight: req.body.weight,
        diet: req.body.diet,
        geographical_distribution: req.body.geographical_distribution,
        period: req.body.period,
        curiosity: req.body.curiosity
    });

    const createdDino = dinoService.createNewDino(newDino)
        .then(result => {
                res.status(200).json(result);
            })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const createManyDino = (req, res) => { 
    const dinoArray = req.body;

    const createdDinos = dinoService.createManyDino(dinoArray)
        .then(result => {
                res.status(200).json(result);
            })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const updateOneDino = (req, res) => {

    const dinoId = req.params.dinoId;

    const updatedOps = {};

    for(const ops of req.body){
        updatedOps[ops.propName] = ops.value;
    };

    const updateDino = dinoService.updateOneDino(dinoId, updatedOps)
        .then(
            result => {
                res.status(200).json(result);
            }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    
};

const deleteOneDino = (req, res) => {
    dinoService.deleteOneDino(req.params.dinoId)
        .then(result => {
            res.status(200)
                .json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

module.exports = {
    getAllDinos,
    getOneDinoById,
    getOneDinoByName,
    getDinoSorted,
    getRandomDino,
    createNewDino,
    createManyDino,
    updateOneDino,
    deleteOneDino
}