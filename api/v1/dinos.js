const mongoose = require('mongoose');
const Dino = require('../../src/database/dino');

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
    connectTimeoutMS: 5_000,
    socketTimeoutMS: 5_000,
    serverSelectionTimeoutMS: 5_000,
  })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

  return cachedDb;
};

module.exports = async (req, res) => {
  try {
    await connectDb(); // Ensure the database is connected

    if (req.method === 'GET') {
      // Optimize query with projection and limit
      const dinos = await Dino.find()
        //.select('name')  // Only select necessary fields
        //.limit(10)       // Limit to 10 records
        .lean()          // Use lean queries for faster read-only queries
        .exec();
      
      return res.status(200).json(dinos);
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    // Handle errors gracefully
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
};