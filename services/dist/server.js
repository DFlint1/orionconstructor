// 'use strict';

// Object.defineProperty(exports, "__esModule", {
//     value: true
// });

// var _express = require('express');

// var _express2 = _interopRequireDefault(_express);

// var _mongoose = require('mongoose');

// var _mongoose2 = _interopRequireDefault(_mongoose);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // importing depencies
// var app = (0, _express2.default)();

// // connecting our mongoDB database
// _mongoose2.default.connect('mongodb://localhost/todos');

// // mongoDB schema
// var todoModel = _mongoose2.default.model('todo', {
//     todo: String,
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// });

// // utility function to print errors
// var logError = function logError(error) {
//     if (error) throw error;
// };

// // main server function which gets call once the app starts 
// // on our index.js file
// var server = function server() {

//     // serving html/js files through the server
//     app.use(_express2.default.static('public'));

//     // routes that gets all todos in a list 
//     // empty is return if nothing is found
//     app.get('/get/all', function (request, response) {
//         todoModel.find(function (error, todos) {
//             logError(error);
//             response.send(todos);
//         });
//     });

//     // saves a todo
//     // :todo is a paramater passed in the url
//     app.get('/save/:todo', function (request, response) {
//         var todo = request.params.todo;


//         new todoModel({ todo: todo }).save(function (error, savedTodo) {
//             logError(error);
//             response.send(savedTodo);
//         });
//     });

//     // removes a specific todo
//     // :date is a parameter passsed in the url
//     // using date to find a todo since it's a unique timestamp
//     app.get('/remove/:date', function (request, response) {
//         var date = request.params.date;


//         todoModel.remove({ date: date }, function (error, deletedTodo) {
//             logError(error);
//             response.send(deletedTodo);
//         });
//     });

//     // finds a specific todo 
//     // updates it a new todo text and completed value  
//     app.get('/update/:date/:completed/:todo', function (request, response) {
//         var _request$params = request.params,
//             date = _request$params.date,
//             completed = _request$params.completed,
//             todo = _request$params.todo;

//         todoModel.findOneAndUpdate({ date: date }, { completed: completed, todo: todo }, { new: true }, function (error, updatedTodo) {
//             logError(error);
//             response.send(updatedTodo);
//         });
//     });

//     // Server is listening to requests at port 3000
//     // port number can change to anything
//     app.listen(3000, function () {
//         console.log('App listening on port 3000!');
//     });
// };

// exports.default = server;