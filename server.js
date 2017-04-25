import express from 'express';
import mongoose from 'mongoose';

// Include Server Dependencies
// var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
// var mongoose = require("mongoose");

// Require Schemas
// var Article = require("./server/model");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/todos");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// mongoDB schema
let todoModel = mongoose.model('todo', {
    todo: String,
    date: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
})
// utility function to print errors
var logError = (error) => {
    if (error)
        throw error;
}
// main server function which gets call once the app starts 
// on our index.js file
var server = () => {

  //serving html/js files through the server
app.use(express.static("/public"));

 // routes that gets all todos in a list 
    // empty is return if nothing is found
app.get('/get/all', (request, response) => {
    todoModel.find((error, todos) => {
    logError(error);
    response.send(todos);    
    })
})
//==========================================================================
    // saves a todo
    // :todo is a paramater passed in the url
app.get('/save/:todo', (request, response) => {
    let {todo} = request.params
    new todoModel({todo}).save((error, savedTodo) => {
    logError(error);
    response.send(savedTodo);
    })

})

    // removes a specific todo
    // :date is a parameter passsed in the url
    // using date to find a todo since it's a unique timestamp
app.get('/remove/:date', (request, response)=>{
    let {date} = request.params

todoModel.remove({date}, (error, deletedTodo) => {
    logError(error);
    response.send(deletedTodo);
    })
})

    // finds a specific todo 
    // updates it a new todo text and completed value  
app.get('/update/:date/:completed/:todo', (request, response) => {
    let {date, completed, todo} = request.params
    todoModel.findOneAndUpdate({date}, { completed, todo }, { new: true }, (error, updatedTodo) => {
    logError(error);
    response.send(updatedTodo);
    })
})
//======================================================
// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})
}
export default server;