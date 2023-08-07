const express = require("express");
const todosRoute = require("./routes/todosRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/todos", todosRoute);

module.exports = app;
