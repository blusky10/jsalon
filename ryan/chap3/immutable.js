let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}

// function rateColor(color, rating) {
//     color.rating = rating
//     return color
// }

// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)

var rateColor = function(color, rating) {
    return Object.assign({}, color, {rating:rating})
}

console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)

let colorArray = [
    {title: "빨강"},
    {title: "잔디"},
    {title: "핑크"}
]

// var addColor = function(title, colors) {
//     colors.push({title: title})
//     return colors
// }
// console.log(addColor("초록", colorArray).length)
// console.log(colorArray.length)

// const addColor = (title, array) => array.concat({title})
const addColor = (title, list) => [...list, {title}]
console.log(addColor("초록", colorArray).length)
console.log(colorArray.length)

