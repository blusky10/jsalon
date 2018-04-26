const userLogs = userName => message =>
console.log(`${userName} -> ${message}`)

const log = userLogs("grandpa23")

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `http://api.randomuser.me/?nat=US&results=${count}`
    const requset = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
(request.staus === 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
request.onerror = (err) => rejects(err)
request.send()
})

log("attempted to load 20 fake members")
getFakeMembers(20).then(
    memers => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members")
)