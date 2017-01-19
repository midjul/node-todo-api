const {ObjectID}= require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})

// Todo.remove({}).then((result)=>{
// console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5880c34777ca71dde1d5b5f7').then((todo)=>{
console.log(todo);
});
