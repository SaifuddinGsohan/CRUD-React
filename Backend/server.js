const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require( 'mongoose' );
const cors = require('cors');

// Models
const  User = require('./models/User');

// express
const app = express();
app.use(express.json());

// cors
app.use(cors());

//Dotenv Config
dotenv.config({path: 'config.env'});

// Mongoose DB Config
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.post("/insert", (req, res) => {
  const { id, name, position, salary } = req.body;
  const user = new User({
    id: parseInt(id),
    name: name,
    position: position,
    salary: parseInt(salary)
  });
  try {
    user.save();
    res.send('Food saved');
  }
  catch (err) {
    console.log(err);
  }
});

// Server
const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`Server started on http://localhost:${port}`)});
