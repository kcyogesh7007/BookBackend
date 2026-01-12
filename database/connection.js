const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.iopwowkdywdlttqnqiti:meroNepal123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated successfully");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("../models/book.model")(sequelize, DataTypes);
sequelize.sync({ alter: false }).then(() => {
  console.log("Migrated successfully");
});

module.exports = db;
