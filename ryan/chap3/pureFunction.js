var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}

// function selfEducate() {
//     frederick.canRead = true
//     frederick.canWrite = true
// }

// const selfEducate = (person) => {
//     frederick.canRead = true
//     frederick.canWrite = true
//     return person
// }

// 이거 안됨 -_-
const selfEducate = (person) =>
({
    ...person,
    canRead : true,
    canWrite : true
})

console.log(selfEducate(frederick))
console.log(frederick)

function Header(text) {
    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1);
}

Header("Header() caused side effect")

const Header = (props) => <h1>{props.title}</h1>