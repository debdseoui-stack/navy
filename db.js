// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //await mongoose.connect('mongodb+srv://dbuser:cLa9fUpMDXDgziS5@cluster0.s4o1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    await mongoose.connect('mongodb://127.0.0.1:27017/nextappdb', { 
     
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;