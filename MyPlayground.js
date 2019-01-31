var _ = require('lodash')

var errors = [
    
];

var loop = errors.length > 0 && errors.map(error => {
    return error
});

console.log(loop)


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


