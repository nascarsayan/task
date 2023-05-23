const express = require('express');

const app = express();

function handleAll(req, res) {
    return res.send('Hello World!');
}

app.get('/', handleAll);

app.listen(3000, () => {
    console.log(
        'Server is running on port 3000\
        \nGo to http://localhost:3000'
    );
});