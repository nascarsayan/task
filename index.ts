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
  console.log(newTask);
  res.send("POST request received");
})

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
