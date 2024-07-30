const express = require("express");

const tasksRouter = require("./Routes/taskRouter.js");

const app = express();

app.use(express.json())

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.use("/tasks", tasksRouter);
