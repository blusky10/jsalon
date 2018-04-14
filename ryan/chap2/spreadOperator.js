// 2.4.3 스프레드 연산자

// var peaks = ["대청봉", "중청봉", "소청봉"]
// var canyons = ["천불동계곡", "가야동계곡"]
// var seoraksan = [...peaks, ...canyons]
// console.log(seoraksan.join(', '))

// var peaks = ["대청봉", "중청봉", "소청봉"]
// var [last] = peaks.reverse()
// console.log(last)
// console.log(peaks.join(', '))

var peaks = ["대청봉", "중청봉", "소청봉"]
var [last] = [...peaks].reverse()
console.log(last)
console.log(peaks.join(', '))

var lakes = ["경포호", "화진포", "송지호", "청초호"]
var [first, ...rest] = lakes
console.log(rest.join(', '))

function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()

    console.log(`${args.length} 도시를 운행합니다.`)
    console.log(`${start}에서 출발합니다.`)
    console.log(`목적지는 ${finish}입니다.`)
    console.log(`중간에 ${stops.length}군데 들립니다.`)
}

directions(
    "서울",
    "수원",
    "천안",
    "대전",
    "대구",
    "부산"
)

var morning = {
    breakfast: "미역국",
    lunch: "삼치구이와 보리밥"
}
var dinner = "스테이크 정식"
var backpackingMeals = {
    ...morning,
    dinner
}
console.log(backpackingMeals)