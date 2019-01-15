const data = [
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
let x = data[0].items.map((item, index) => {
    console.log(index === data[0].items.length - 1)
})
// console.log(data[0].src)