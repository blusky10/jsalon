const print(message) => log(message, new Date())
const log(message, timestamp) =>
console.log(`${timestamp.toString()}: ${message}`)

module.export = {print, log}