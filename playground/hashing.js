const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log('hash :',hash);
//     });
// });

var hashedPassword = '$2a$10$fBckwXNdxKhSBDteK93/sOQmhNBf.aJ7TQeQZvkGffHCY3YjkbUza';

bcrypt.compare('123abc', hashedPassword, (err, res) => {
    console.log(res);
});


// var data = {
//     name: 'Krunal'
// };

// var token = jwt.sign(data, 'asshole');

// var decode = jwt.verify(token, 'asshole');

// console.log('Decode: ', decode);

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