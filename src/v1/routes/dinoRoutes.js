const express = require('express');
const path = require('path');

const router = express.Router();

const dinoController = require("../../controllers/dinoController");

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../public/index.html'));
})
.get("/dinos", dinoController.getAllDinos)
.get("/dinos/sorted", dinoController.getDinoSorted)
.get("/dinos/random", dinoController.getRandomDino)
.get("/dinos/:dinoId", dinoController.getOneDinoById)
.get("/dinos/name/:dinoName", dinoController.getOneDinoByName)
.post("/dinos", dinoController.createNewDino)
.post("/dinos/many", dinoController.createManyDino)
.patch("/dinos/:dinoId", dinoController.updateOneDino)
.delete("/dinos/:dinoId", dinoController.deleteOneDino);

module.exports = router;