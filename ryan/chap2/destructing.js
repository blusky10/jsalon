// 2.4.1 구조 분해를 사용한 대입

var sandwich = {
    bread: "더치 크런치",
    meat: "참치",
    cheese: "스위치",
    topping: ["상추", "토마토", "머스타드"]
}

var {bread, meat} = sandwich

bread = "마늘"
meat = "칠면조"

console.log(bread, meat)
console.log(sandwich.bread, sandwich.meat)

//////////////////////////////////////////////////////

// var lordify = regularPerson => {
//     console.log(`캔터베리의 ${regularPerson.firstName}`)
// }

var lordify = ({firstName}) => {
    console.log(`캔터베리의 ${regularPerson.firstName}`)
}

var regularPerson = {
    firstName: "현석",
    lastName: "오"
}

lordify(regularPerson)

////////////////////////////////////////////////////////

// var [firstResort] = ["용평", "평창", "강촌"]
var [, ,thirdResort] = ["용평", "평창", "강촌"]
// console.log(firstResort)
console.log(thirdResort)