const express = require('express');
const mongoose = require('mongoose');
const v1DinoRouter = require("./v1/routes/dinoRoutes");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const user = process.env.MONGO_ATLAS_USER;
const password = process.env.MONGO_ATLAS_PASSWORD;
const cluster = process.env.MONGO_ATLAS_CLUSTER;
const dbName = process.env.MONGO_ATLAS_DB;

const mongoUri = `mongodb+srv://${user}:${password}@${cluster}${dbName}`;

mongoose.connect(mongoUri,{})
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