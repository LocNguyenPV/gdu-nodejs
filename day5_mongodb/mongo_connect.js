const mongoose = require('mongoose');
const config = require('./utils/config');

const { username, password, clusterHost, dbName, appName } = config.mongodb;
// const mongoURI = `mongodb+srv://${username}:${password}@${clusterHost}/${dbName}?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT/?appName=${appName}`;
const mongoURI = `mongodb+srv://${username}:${password}@${clusterHost}/${dbName}?appName=${appName}&retryWrites=true&w=majority&ssl=true`
const connectDB = async () => {
  try {
    if (!mongoURI) {
      throw new Error('FATAL ERROR: MONGO_URI is not defined');
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1); // Exit with a failure code
  }
};

module.exports = connectDB;
