const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

require('dotenv').config();


var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('MongoDB database connection established successfully');
    })

    const commentsRouter = require ('./routes/comments');
    const golfseriesRouter = require('./routes/golfseries');
    const mailRouter = require('./routes/mail');
    
    app.use('/comments', commentsRouter);
    app.use('/golfseries', golfseriesRouter);
    app.use('/gallery', mailRouter);




  

app.listen(port, '0.0.0.0', function()  {
    console.log(`Serer is running on port: ${port}`);
});