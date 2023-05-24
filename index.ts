// const express = require('express');
import express, { Express, Request, Response } from "express";

const app = express();

function handleRoot(req: Request, res: Response) {
  return res.send("Hello World!");
}

app.get("/", handleRoot);

app.get("/tasks", (req: Request, res: Response) => {
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
    }
  ];
  res.send(tasks);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
