import dotenv from "dotenv";

dotenv.config();

// Determine the current environment if NODE_ENV is not avaliable, (default to 'development')
const env = process.env.NODE_ENV || "development";
const config = {
  development: {
    username: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.PROD_DB_USERNAME || "root", 
    password: process.env.PROD_DB_PASSWORD || null,
    database: process.env.PROD_DB_NAME || "database_production",
    host: process.env.PROD_DB_HOST || "127.0.0.1",
    dialect: "postgres", 
  },
};

export default config;
