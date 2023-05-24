"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function handleRoot(req, res) {
    return res.send("Hello World!");
}
app.get("/", handleRoot);
app.get("/tasks", (req, res) => {
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
