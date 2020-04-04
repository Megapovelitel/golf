const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '..','build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
  
});


const port = process.env.PORT || 5000;



const uri = process.env.MONGODB_URI;
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




  

app.listen(port, function()  {
    console.log(`Serer is running on port: ${port}`);
});