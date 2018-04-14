// 2.2 arrow function

// var lordify = function (firstName) {
//     return `켄터베리의 ${firstName}`
// }

// var lordify = firstName => `켄터베리의 ${firstName}`

// var lordify = function (firstName, land) {
//     return `${land}의 ${firstName}`
// }

// var lordify = (firstName, land) => `${land}의 ${firstName}`

// console.log(lordify("오성원", "브리즈번"))
// console.log(lordify("오성원", "시드니"))

// var lordify = function (firstName, land) {
//     if (!firstName) {
//         throw new Error('lordify에 이름을 넘겨야 합니다.')
//     }
//
//     if (!land) {
//         throw new Error('영주에게는 영지가 있어야 합니다.')
//     }
//
//     return `${land}의 ${firstName}`
// }

var lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error('lordify에 이름을 넘겨야 합니다.')
    }

    if (!land) {
        throw new Error('영주에게는 영지가 있어야 합니다.')
    }

    return `${land}의 ${firstName}`
}

console.log(lordify("오성원", "브리즈번"))
console.log(lordify("오성원"))
