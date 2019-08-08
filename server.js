const express = require('express');
const mongoose = require('mongoose');

const news = require('./routes/api/news');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');


const config = require('config');

const path = require('path');


const app = express();


app.use(express.json());


const databaseURL = config.get('mongoURI');
const localDatabaseURL = config.get('localDB');
const db = databaseURL;
if (process.env.NODE_ENV === 'development') {
    db = localDatabaseURL;
}

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log(`server running on port ${db}`))
    .catch(err => console.log(err));



app.use('/api/news', news);
app.use('/api/users', users);
app.use('/api/auth', auth);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));

