const express = require('express');
const mongoose = require('mongoose');
const v1DinoRouter = require("./v1/routes/dinoRoutes");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@dino-api-rest.acirv.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_ATLAS_DATABASE}`,{})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use("/api/v1", v1DinoRouter);

app.listen(PORT, () => {
    console.log(` Server listening on port http://localhost:${PORT}`);
});

module.exports = app;