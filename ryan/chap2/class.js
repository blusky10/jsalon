// 2.6 클래스

// function Vacation(destination, length) {
//     this.destination = destination
//     this.length = length
// }
//
// Vacation.prototype.print = function () {
//     console.log(this.destination + "은(는) " + this.length + "일 걸립니다.")
// }
//
// var maui = new Vacation("마우이", 7)
// maui.print()

class Vacation {

    constructor(destination, length) {
        this.destination = destination
        this.length = length
    }

    print() {
        console.log(this.destination + "은(는) " + this.length + "일 걸립니다.")
    }
}

const trip = new Vacation("칠레 산티아고", 7)
console.log(trip.print())

class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length)
        this.gear = gear
    }

    print() {
        super.print()
        console.log(`당신의 ${this.gear.join("와(과) 당신의 ")}를(을 가져오십시오.`)
    }
}
const trip2 = new Expedition("한라산", 3, ["선글라스", "오색 깃발", "카메라"])
trip2.print()