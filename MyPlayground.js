var _ = require('lodash')
var moment = require('moment');

var expirationDate = moment('2019-11-08', 'YYYY-MM-DD').format('MM/DD');

// var month = expirationDate.getMonth()

console.log(expirationDate)

// function getFirstName(name) {
//     if (_.isString(name)) {
//         const splitNameIntoArray = name.split(' ');
//         let firstName = splitNameIntoArray[0];
//         if (splitNameIntoArray[0] === 'Ma.' || splitNameIntoArray[0] === 'Ma') {
//             firstName = `${splitNameIntoArray[0]} ${splitNameIntoArray[1]}`;
//         }
//         return firstName
//     }
// }

// console.log(getFirstName('Ma. Angelica Oanes'));
