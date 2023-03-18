'use strict';

/*
* This program sets up a server that listen for get requests on port 3000. The
* response is to display static pages to the frontend and also to output the
* contents of a server side json file in tabular form on the main page of the
* front end.
* */

/* Requiring the modules needed in this project */
const fs = require('fs');
const express = require('express');

/* Calling the express() function to place an Express application inside the index
* variable */
const index = express();

/* Statement to enable the display of static pages through the server below */
index.use(express.static('public'));

/* Declaration of jsonData outside the readFile function so that it is
* accessible outside the function */
let jsonData;

/* The readFile method of the fs module is used to read the json file and return
* a json object */
fs.readFile('./organisation.json', (err, data) => {
    if (err) {
        console.log('Error in reading organisation.json');
    } else {
        jsonData = data.toString();
    }
})

/* The root route that will send the index.html file to the browser when a request
* is sent to the "/" route folder */
index.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

/* Sending the json file as an object when a get request to '/jsonData' is received. */
index.get('/jsonData', (req, res) => {
    res.json(jsonData);
});

/* Finally the listen method to set up which port will be listened to for any
* requests */
index.listen(3000, () => {
    console.log(`Notification: my_first_express_app listening on port 3000`);
});
