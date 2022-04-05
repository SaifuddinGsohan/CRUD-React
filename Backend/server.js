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

// --Routes-- //
//insert
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

//read
app.get("/read", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(users);
    }
  });
});

//update
app.put("/update", (req, res) => {
  const { _id, id, name, position, salary} = req.body;
  try {
    User.findById(_id, (err, updatedUser) => {
      updatedUser.id = parseInt(id);
      updatedUser.name = name;
      updatedUser.position = position;
      updatedUser.salary = parseInt(salary);
      updatedUser.save();
    });
  } catch (err) {
    console.log(err);
  }
});

//delete
app.delete("/delete/:_id", (req, res) => {
  const { _id } = req.params;
  try {
    User.findByIdAndDelete(_id, (err, deletedUser) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(deletedUser);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// --Routes end-- //

// Server
app.listen(process.env.PORT, () => {
  console.log("Server started on " + process.env.URL);
});
