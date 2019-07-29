const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const news = require('./routes/api/news');
// const teams = require('./routes/teams');

const path = require('path');


const app = express();
app.use(bodyParser.json())

//db config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err));

// using our routes

app.use('/api/news', news);
// app.use('/teams', teams);

//serve static assets in production and deploy to heroku
//check if our node environment === production
if (process.env.NODE_ENV === 'production') {
    //set static folder//telling express to load the client/build/index.html file
    app.use(express.static('client/build'));
    //for any request that is not from /api/items
    app.get('*', (req, res) => {
        //this loads the index.html file 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


//running our server
const port = process.env.PORT || 5000;
//listening to the port and outputting which port is currently running
app.listen(port, () => console.log(`server running on port ${port}`));

