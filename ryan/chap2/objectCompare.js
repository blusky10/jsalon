// 예제 2-5 새로운 방식과 예쩐 방식의 객체선언 문법 비교

// 예전방식
var skier = {
    name: name,
    sound: sound,
    powderYell: function () {
        var yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}`)
    },
    speed: function (mph) {
        this.speed = mph
        console.log('속력(mph):', mph)
    }
}

// 새로운 방식
const skier = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase()
    },
    speed(mph) {
        this.speed = mph
        console.log('속력(mph):', mph)
    }
}