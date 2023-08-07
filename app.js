const express = require("express");
const cors = require("cors");
const todosRoute = require("./routes/todosRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/todos", todosRoute);

module.exports = app;
