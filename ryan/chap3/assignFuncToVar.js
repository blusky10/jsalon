var log = function(message) {
    console.log(message)
}

log("자바스크립트에서는 함수를 변수에 넣을 수 있습니다.")

const logg = message => console.log(message)

logg("상수로...")

const obj = {
    message: "함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.",
    log(message) {
        console.log(message)
    }
}

obj.log(obj.message)

const messages = [
    "함수를 배열에 넣을수도 있습니다.",
    message => console.log(message),
    "일반적인 값과 마찬가지 입니다.",
    message => console.log(message)
]

messages[1](messages[0])
messages[3](messages[2])

const insideFn = logger => logger("함수를 다른 함수에 인자로 넘길 수도 있습니다.");
// 이거 잘모르겟음...
// const insideFn = function (logger) {
//     return logger("함수를 다른 함수에 인자로 넘길 수도 있습니다.");
// };

insideFn(message => console.log(message))
console.log()


var createScream = function (logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

const scream = createScream(message => console.log(message))

scream('함수가 함수를 반환할 수도 있습니다')
scream('createScream은 함수를 반환합니다')
scream('scream은 createScream이 반환한 함수를 가리킵니다')

const createScream = logger => message => logger(message.toUpperCase() + "!!!")

// 함수를 인자로 받거나 함수를 반환하는 함수를 고차함수(ES6)
// 2개 이상의 화살표가 있다면 고차함수를 사용하고 있다는 뜻이다.

// 자바스크립트에서는 함수가 1급 시민이기 때문에 자바스크립트를 함수형 언어라고 할수 있다.