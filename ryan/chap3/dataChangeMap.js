let schools = [
    {name : "Yorktown"},
    {name : "Startford"},
    {name : "Washington & Lee"},
    {name : "Wakefield"}
]

// const editName = (oldName, name, arr) =>
// arr.map(item => {
//     if (item.name === oldName) {
//         return {
//             ...item,
//             name
//         }
//     } else {
//         return item
//     }
// })

const editName = (oldName, name, arr) =>
arr.map(item => (item.name === oldName) ?
({...item, name}) : item)

let updatedSchools = editName("Startford", "HB Woodlawn", schools)

console.log(updatedSchools[1])
console.log(schools[1])


const editNth = (n, name, arr) =>
arr.map((item, i) => (i === n) ?
({...item, name}) : item
)
let updateSchooles2 = editNth(2, "Mansfield", schools)

console.log(updateSchooles2[2])
console.log(schools[2])
