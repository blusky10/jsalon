// 2.4.2 객체 리터럴 개선
// var name = "탈락"
// var elevation = 9738
//
// var funHike = {name, elevation}
// console.log(funHike)

var name = "Tallac"
var elevation = 9738

var print = function () {
    console.log(`${this.name} 산의 높이는 ${this.elevation}피트 입니다.`)
}

var funHike = {name, elevation, print}
funHike.print()