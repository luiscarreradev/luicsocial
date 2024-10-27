const valiteProcess = (processPara) => {
  if (!processPara) {
    console.error("FATAL ERROR: MONGO_URI is not defined.");
    process.exit(1);
  }
};

module.exports = valiteProcess;