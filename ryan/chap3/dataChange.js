const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
]

console.log(schools.join(", "))

const wSchoosl = schools.filter(school => school[0] === "W")
console.log(wSchoosl)

const cusSchool = (cut, list) =>
list.filter(school => school !== cut)

console.log(cusSchool("Washington & Lee", schools).join(" * "))
console.log(schools.join("\n"))

// const highSchools = schools.map(schools => `${schools} High School`)
// console.log(highSchools.join("\n"))

console.log(schools.join("\n"))

const highSchools = schools.map(school => ({name: school}))
console.log(highSchools)