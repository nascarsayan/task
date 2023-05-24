// const express = require('express');
import express, { Express, Request, Response } from "express";

const app = express();
app.use(express.json());

function handleRoot(req: Request, res: Response) {
  return res.send("Hello World!");
}

const tasks = [
  {
    id: "1",
    description: "Drink water",
    completed: false,
  },
  {
    id: "2",
    description: "Eat food",
    completed: true,
  },
];

app.get("/", handleRoot);

app.get("/tasks", (req: Request, res: Response) => {
  res.send(tasks);
});

app.post("/tasks", (req: Request, res: Response) => {
  // extract the new task from the request body.
  const newTask = req.body;
  // first check if all the required properties are sent in the request body.
  if (!(
    newTask.id &&
    typeof newTask.id === "string")) {
    return res
      .status(400)
      .send("id is required and should be a string");
  }
  if (!(
    newTask.description &&
    typeof newTask.description === "string")) {
    return res
      .status(400)
      .send("description is required and should be a string");
  }
  if (!(newTask.completed !== undefined && typeof newTask.completed === "boolean")) {
    return res
      .status(400)
      .send("completed is required and should be a boolean");
  }
  for (const task of tasks) {
    if (task.id === newTask.id) {
      return res
        .status(400)
        .send("Another task with the same id already exists");
    }
  }
  // Another check could be that only these three properties are sent in the request body. Any other property should not be allowed.
  // extract the properties of the new task.
  const {
    id,
    description,
    completed,
  } = newTask;
  // add the new task to the tasks array.
  const t = {
    id,
    description,
    completed,
  }
  tasks.push(t);
  console.log(newTask);
  res.send(t);
})

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
