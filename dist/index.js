"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function handleAll(req, res) {
    return res.send('Hello World!');
}
app.get('/', handleAll);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});