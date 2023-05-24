"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
function handleRoot(req, res) {
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
app.get("/tasks", (req, res) => {
    res.send(tasks);
});
app.post("/tasks", (req, res) => {
    // extract the new task from the request body.
    const newTask = req.body;
    console.log(newTask);
    res.send("POST request received");
});
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
