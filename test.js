const Queue = require('./queue.js')

async function call(item) {
  console.log(item)
}

const queue = new Queue()

queue.additem("Hi")
queue.additem("Bye")
queue.additem("Loser")
queue.additem("I get that a lot")
queue.shift()
async function start() {
  await queue.start(500, call)
}
start()

var random = setInterval(random, 1000)

function mantick() {
  queue.tick(call)
}

function random() {
  let a = Math.floor(Math.random() * 100)
  queue.additem(a)
}
