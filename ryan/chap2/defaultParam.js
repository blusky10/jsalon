// 2.1.4 디폴트 파라미터

// function logActivity(name="오성원", activity="데니스") {
//     console.log(`${name}은 ${activity}를 좋아합니다.`)
// }
//
// logActivity()

var defaultPerson = {
    name: {
        first: "성원",
        last: "오"
    },
    favActivity: "테니스"
}

function logActivity(p=defaultPerson) {
    console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`)
}
logActivity()