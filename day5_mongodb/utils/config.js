require("dotenv").config();
const config = {
    mongodb:{
        username: process.env.MONGODB_USER || "admin",
        password: process.env.MONGODB_PASSWORD || "password",
        clusterHost: process.env.MONGODB_CLUSTER_HOST || "cluster",
        dbName: process.env.MONGODB_DB_NAME || "simpleDB",
        appName: process.env.MONGODB_APP_NAME || "AppName",
    }
}

module.exports = config;