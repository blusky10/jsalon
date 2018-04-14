// 바인딩
// var gangwon = {
//     resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
//     print: function (delay=1000) {
//         setTimeout(function () {
//             // this가 window 객체이기때문에 오류 발생
//             console.log(this.resorts.join(","))
//         }, delay)
//     }
// }

// var gangwon = {
//     resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
//     print: function (delay=1000) {
//         setTimeout( () => {
//             // 정상동작
//             console.log(this.resorts.join(","))
//         }, delay)
//     }
// }


var gangwon = {
    resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
    print: function(delay=1000)  {
        setTimeout(() => {
            // this가 window 객체이기때문에 오류 발생 -> window 객체를 인식 못함 테스트 불가
            console.log(this === window)
        }, delay)
    }
}

// var gangwon = {
//     resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
//     print: (delay=1000) => {
//     setTimeout( () => {
//     // this가 window 객체이기때문에 오류 발생
//     console.log(this === window)
//     }, delay)
//     }
// }


gangwon.print()