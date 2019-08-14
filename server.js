const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');
const app = express();

mongoose.connect('mongodb+srv://jmvillatei:1234@crud-mongo-v77na.mongodb.net/meanbd?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(function (db) { // <- db as first argument
        console.log('Base conectada')
    })
    .catch(function (err) {
        console.log('Error, BD no conectada')
    });

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())

// Routes
app.use('/', apiRouter);

//Static files

app.use(express.static(path.join(__dirname , 'public/dist/cqm-meanstack-test')))

app.listen(app.get('port'), function(){
    console.log('Server running ', app.get('port'));
});