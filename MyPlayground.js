var _ = require('lodash')
const response = [
    {
        id: 1,
        items: [
            { src: 4, type: 'img' },
            { src: 5, type: 'img' },
            { src: 6, type: 'img' },
            { src: 7, type: 'img' }
        ]
    }
];

var x = "";
console.log(/\S/.test(x));


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

console.log(autorun());


