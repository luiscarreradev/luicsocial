const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const validateEnv = require("./config/validate");
const dbConection = require("./config/db");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

// Config
dotenv.config();
validateEnv(process.env.MONGO_URI);
dbConection(mongoose);
const port = process.env.PORT || 8800;

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log("Backend server is runnig!");
});
