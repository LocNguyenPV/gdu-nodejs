require("dotenv").config();
const config = {
    mongodb:{
        username: process.env.MONGODB_USER || "admin",
        password: process.env.MONGODB_PASSWORD || "password",
        clusterHost: process.env.MONGODB_CLUSTER_HOST || "cluster",
        dbName: process.env.MONGODB_DB_NAME || "simpleDB",
        appName: process.env.MONGODB_APP_NAME || "AppName",
    },
    mysql:{
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PASSWORD || "rootpassword",
        database: process.env.MYSQL_DB_NAME || "testdb",
    }
}

module.exports = config;