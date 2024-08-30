const mongoose = require('mongoose');
const MONGO_ATLAS_USER = process.env.MONGO_ATLAS_USER;
const MONGO_ATLAS_PASSWORD = process.env.MONGO_ATLAS_PASSWORD;
const MONGO_ATLAS_DATABASE = process.env.MONGO_ATLAS_DATABASE;

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@dino-api-rest.acirv.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_ATLAS_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = async (req, res) => {
  await connectDb();

  if (req.method === 'GET') {
    try {
      const Dino = mongoose.model('Dino', new mongoose.Schema({
        name: String,
        description: String,
        length: String,
        height: String,
        weight: String,
        diet: String,
        geographical_distribution: String,
        period: String,
        last_fossil_registry: String,
        curiosity: String
      }));

      const dinos = await Dino.find();
      res.status(200).json(dinos);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};