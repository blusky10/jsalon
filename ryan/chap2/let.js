// 2.1.2 let
// var topic = "자바스크립트"
//
// if (topic) {
//     var topic = "리액트"
//     console.log('블록', topic)    // 블록 리액트
// }
// console.log('글로벌', topic)   // 글로벌 리액트

var topic = "자바스크립트"

if (topic) {
    let topic = "리액트"
    console.log('블록', topic)    // 블록 리액트
}
console.log('글로벌', topic)   // 글로벌 자바스크립트