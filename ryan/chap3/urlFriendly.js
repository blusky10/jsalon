// var string = "This is the midday show with Cheryl Waters";
// var urlFriendly = "";

// for (var i=0; i<string.length; i++) {
//     if (string[i] ===" ") {
//         urlFriendly += "-";
//     } else {
//         urlFriendly += string[i];
//     }
// }

// console.log(urlFriendly);

const string = "This is the midday show with Cheryl Waters"
const urlFriendly = string.replace(/ /g, "-")

console.log(urlFriendly)


// 선언적 프로그래밍 예제
// const loadAndMapMembrs = compose(
//     combineWith(sessionStorage, "members"),
//     save(sessionStorage, "members"),
//     scopeMembers(window),
//     logMemberInfoToConsole,
//     logFiledsToConsole("name.first"),
//     countMemberBy("location.state"),
//     prepStatesForMapping,
//     save(sessionStorage, "map"),
//     renderUSMap
// );
// getFakeMembers(100).then(loadAndMapMembrs);

// 리액트 예제
const {render} = ReactDOM

const Welcome = () => (
    <div id="welcome">
        <h1>Hello World</h1>
    </div>
)

render(
    <Welcome />,
    document.getElementById('target')
)