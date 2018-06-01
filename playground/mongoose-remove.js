const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove


Todo.findOneAndRemove({text: 'Keep guessing asshole'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b115ea8b422811621510499').then((todo) => {
    console.log(todo);
});