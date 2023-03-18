'use strict';

const fs = require('fs');
const express = require('express');
const index = express();

index.use(express.static('public'));

let jsonData;

fs.readFile('./organisation.json', (err, data) => {
    if (err) {
        console.log('Error in reading organisation.json');
    } else {
        jsonData = data.toString();
    }
})

index.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

index.get('/jsonData', (req, res) => {
    console.log(jsonData)
    res.json(jsonData);
});

index.listen(3000, () => {
    console.log(`Notification: my_first_express_app listening on port 3000`);
});
