import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath } from "url";
import process from "process";
import config from "../config/config.js";  

// For ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
const db = {};

// Initialize Sequelize instance
let sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

// Dynamically import models
const loadModels = async () => {
  const files = fs.readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.endsWith(".js") &&
      !file.endsWith(".test.js")
    );
  });

  for (const file of files) {
    const modelImport = await import(`file://${path.join(__dirname, file)}`);
    const model = modelImport.default(sequelize, DataTypes);
    db[model.name] = model;
  }
};

// Establish associations
const establishAssociations = () => {
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
};

// Run initialization in an async function
(async () => {
  try {
    await loadModels();
    establishAssociations();
    console.log("Models loaded successfully.");
  } catch (error) {
    console.error("Error loading models:", error);
  }
})();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
