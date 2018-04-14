// 2.5 프라미스

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

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("randomuser.me에서 멤버를 가져올 수 없습니다.")
)
)