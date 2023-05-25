// const express = require('express');
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

function handleRoot(req: Request, res: Response) {
  return res.send("Hello World!");
}

app.get("/", handleRoot);

app.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.send(tasks);
});

app.patch("/tasks/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  if (!(
    body.completed !== undefined &&
    typeof body.completed === "boolean")) {
    return res
      .status(400)
      .send("completed is required and should be a boolean");
  }
  const completed: boolean = body.completed;

  // first check if a task with the given id exists.
  const task = await prisma.task.findUnique({
    where: {
      id: id
    }
  })
  if (!task) {
    return res
    .status(404)
    .send("No task with the given id was found");
  }

  // update the task with the given id.
  const t = await prisma.task.update({
    where: {
      id: id
    },
    data: {
      completed: completed
    }
  })
  return res.send(t);
})

app.post("/tasks", async (req: Request, res: Response) => {
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
  // TODO: check if a task with the same id already exists.
  // for (const task of tasks) {
  //   if (task.id === newTask.id) {
  //     return res
  //       .status(400)
  //       .send("Another task with the same id already exists");
  //   }
  // }
  // Another check could be that only these three properties are sent in the request body. Any other property should not be allowed.
  // extract the properties of the new task.
  const {
    id,
    description,
    completed,
  } = newTask;
  // add the new task to the tasks array.
  const t = await prisma.task.create({
    data: {
      id,
      description,
      completed,
    }
  })
  console.log(newTask);
  res.send(t);
})

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
