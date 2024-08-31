const mongoose = require('mongoose');
const Dino = require('../../src/database/dino');
const user = process.env.MONGO_ATLAS_USER;
const password = process.env.MONGO_ATLAS_PASSWORD;
const cluster = process.env.MONGO_ATLAS_CLUSTER;
const dbName = process.env.MONGO_ATLAS_DB;

const mongoUri = `mongodb+srv://${user}:${password}@${cluster}${dbName}`;

const connectDb = async () => {

  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose.connection;
};

module.exports = async (req, res) => {
  await connectDb();

  if (req.method === 'GET') {
    try {

      const dinos = await Dino.find()
      .select('name')
      .limit(10)
      .lean()
      .exec();
      res.status(200).json(dinos);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};