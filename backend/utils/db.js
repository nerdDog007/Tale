const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('DB Connection Error:', error)
    process.exit(1)
  }
}

module.exports = connectDB