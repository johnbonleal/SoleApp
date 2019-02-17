var _ = require('lodash')

var str = "Full Name"

let splitIntoArray = str.split(' ')[0];

console.log(str.length)
// function convertToCamelCase(str) {
//     let removeSpace = str.replace(/\s/g, '');
//     console.log(removeSpace)
// }

// console.log(_.camelCase(str))

// var Carousel = (function() {
//     let currentIndex = 0
//     let data = response;

//     function autoPlay(reset = true) {
//         if (reset) return
//         console.log(currentIndex);
//         onNextItem();
//     }
//     function onNextItem() {
//         // autoPlay();
//         currentIndex = currentIndex < data[0].items.length - 1 ? currentIndex + 1 : 0;
//         setCurrentIndex(currentIndex);
//         console.log(currentIndex)
//     }
//     function setCurrentIndex(index) {
//         currentIndex = index
//     }
//     return {
//         init: autoPlay
//     }
// })();

// console.log(autorun());
