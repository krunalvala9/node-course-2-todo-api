const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    name: 'Krunal'
};

var token = jwt.sign(data, 'asshole');

var decode = jwt.verify(token, 'asshole');

console.log('Decode: ', decode);

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hashed value: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }