// server.js

require('dotenv').config();
const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan');

const app = express();
var port = process.env.PORT || 3000;

// replace process.env.MONGO_DB with your mlab account credentials
// or just create a .env file containing MONGO_DB and value
mongoose.connect(
    process.env.MONGODB,
    { useNewUrlParser: true },
    (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log('MongoDB is now connected');
    }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/node', express.static(__dirname + '/node_modules'));

// models
require('./server/model/dev.model');

// api
const devApi = require('./server/api/dev.api');

app.use('/api/devs', devApi);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Server running on ' + port);
});
