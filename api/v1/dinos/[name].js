const mongoose = require('mongoose');
const Dino = require('../../../src/database/dino');

const mongoUri = process.env.MONGO_ATLAS_URI;

let cachedDb = null;

const connectDb = async () => {
  // Reuse the cached connection if available
  if (cachedDb) {
    return cachedDb;
  }

  // Only connect if no existing connection
  if (mongoose.connection.readyState >= 1) {
    cachedDb = mongoose.connection;
    return cachedDb;
  }

  cachedDb = await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

  return cachedDb;
};

module.exports = async (req, res) => { 
    await connectDb(); // Ensure the database is connected
  try {
    if (req.method === 'GET') {
        const { name } = req.query;
        const regex = new RegExp(name, 'i');
        const dino = await Dino.findOne({ name: {$regex: regex} });
      return res.status(200).json(dino);
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    // Handle errors gracefully
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
};