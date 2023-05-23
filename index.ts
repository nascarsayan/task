// const express = require('express');
import express, { Express, Request, Response } from 'express';


const app = express();

function handleAll(req: Request, res: Response) {
    return res.send('Hello World!');
}

app.get('/', handleAll);

app.listen(3000, () => {
    console.log(
        'Server is running on http://localhost:3000'
    );
});