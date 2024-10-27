const conn = (databaseORM) => {
  databaseORM
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(`Something just happened: ${err}`);
    });
};

module.exports = conn;
