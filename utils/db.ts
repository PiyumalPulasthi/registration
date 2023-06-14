import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://0.0.0.0:27017/user'; //MongoDB connection URL

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default connectDB;