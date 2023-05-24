// const express = require('express');
import express, { Express, Request, Response } from "express";

import data from "./data/db.json";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

const tasks: Task[] = data.tasks;

const app = express();

function handleAll(req: Request, res: Response) {
  return res.send("Hello World!");
}

app.get("/", handleAll);

app.get("/tasks", (req: Request, res: Response) => {
  return res.json(tasks);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
