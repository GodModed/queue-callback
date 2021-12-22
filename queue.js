function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Queue {
  constructor() {
    this.items = []
    this.iterations = 0
    this.started = false
  }
  async additem(item) {
    if (typeof item == 'undefined') throw new Error('There is nothing to add to the queue.')
    return this.items.push(item)
  }
  async shift() {
    return this.items.shift()
  }
  async start(delay, callback) {
    if (typeof callback !== 'function') throw new Error('Callback is not a function.')
    this.started = true
    while (this.started == true) {
      this.tick(callback)
      await sleep(delay)
    }
  }
  async tick(callback) {
    if (typeof callback !== "function") throw new Error("Callback is not a function.")
    if (typeof this.items[0] == 'undefined') return
    callback(this.items[0])
    this.items.shift()
    this.iterations++
  }
  async clear() {
    return {
      this.items = []
      this.iterations = 0;
  }
  }
  async stop() {
    return this.started = false
  }
  async first() {
    return this.items[0]
  }
}

module.exports = Queue
