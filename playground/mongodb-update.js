//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b0fc628604d15f29f1b1559')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b0fb3e7bc84882e68e36eda')
    }, {
        $set: {
            name: 'Krunal'
        },
        $inc: {
            age: 7  
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    // db.close();
});