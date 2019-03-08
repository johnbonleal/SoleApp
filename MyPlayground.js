var _ = require('lodash')
var moment = require('moment');

var expirationDate = moment('2019-11-08', 'YYYY-MM-DD').format('MM/DD');

// var month = expirationDate.getMonth()

// console.log(expirationDate)

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

let merchants = [
    {
        attributes: {
            id: 1,
            name: "David\'s Salon",
            category: "Beauty and Wellness",
            location: "Pasig City"
        }
    },
    {
        attributes: {
            id: 2,
            name: "XYZ Salon",
            category: "Beauty and Wellness",
            location: "Makati City"
        }
    },
    {
        attributes: {
            id: 3,
            name: "Tokyo Tokyo",
            category: "Restaurant",
            location: "Pasig City"
        }
    },
    {
        attributes: {
            id: 4,
            name: "Kamayan",
            category: "Restaurant",
            location: "Muntinlupa City"
        }
    },
    {
        attributes: {
            id: 5,
            name: "Microtel by Wyndhams",
            category: "Hotel",
            location: "Manila City"
        }
    }
]

const removeEmpty = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
        else if (obj[key] == null || obj[key] == undefined) delete obj[key];
    });
    return obj;
};

// {
//     for (var key in newFilter) {
//         if (item.attributes[key].toLowerCase().indexOf(newFilter[key].toLowerCase()) !== -1)
//             return item;
//     }
// });
function searchMerchants(arr, filter) {
    let initialArr = arr;
    let filterCondition = removeEmpty(filter);
    console.log(filterCondition);
    if (initialArr.length > 0) {
        initialArr = _.filter(initialArr, item => {
            return (item.attributes.name.toLowerCase().indexOf(filterCondition.name.toLowerCase()) !== -1 || item.attributes.category.toLowerCase().indexOf(filterCondition.category.toLowerCase()) !== -1)
        });
    }
    return initialArr;
}

console.log(searchMerchants(merchants, {name: "kama", category: "Restaurant", location: undefined}))

let str1 = "Get free fries or drinks for 300 points - Eduardo's Peri-Peri Flamed Grilled Chicken"
let arr5 = str1.split(" - ")
console.log(arr5)
