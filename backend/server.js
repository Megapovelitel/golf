const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
  
});


const port = process.env.PORT || 5000;



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




  

app.listen(port, function()  {
    console.log(`Serer is running on port: ${port}`);
});