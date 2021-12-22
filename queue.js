function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Queue {
  constructor() {
    this.items = []
    this.iterations = 0
    this.started = false
  }
  /**
  * Adds an item to the queue
  * @constructor
  * @param {(number|string)} item - the item to be added to the queue.
  */
  async additem(item) {
    if (typeof item == 'undefined') throw new Error('There is nothing to add to the queue.')
    return this.items.push(item)
  }
  /**
  * Removes the item first in line in the queue.
  * @constructor
  */
  async shift() {
    return this.items.shift()
  }
  /**
  * Starts executing the callback with the item in the queue.
  * @constructor
  * @param {number} delay - the amoubnt of time the function waits for each item in the queue.
  * @param {requestCallback} callback - calls the callback on each item in the queue.
  */
  async start(delay, callback) {
    if (typeof callback !== 'function') throw new Error('Callback is not a function.')
    this.started = true
    while (this.started == true) {
      this.tick(callback)
      await sleep(delay)
    }
  }
  /**
  * Same thing as start but only goes through the first item in the queue.
  * @constructor
  * @param {requestCallback} callback - calls the callback item for the item in the queue.
  */
  async tick(callback) {
    if (typeof callback !== "function") throw new Error("Callback is not a function.")
    if (typeof this.items[0] == 'undefined') return
    callback(this.items[0])
    this.items.shift()
    this.iterations++
  }
  /**
  * Clears the queue.
  * @constructor
  */
  async clear() {
    this.items = []
    this.iterations = 0;
  }
  /**
  * Stops the currently running queue.
  * @constructor
  */
  async stop() {
    return this.started = false
  }
  /**
  * Outputs the first item in the queue.
  * @constructor
  */
  async first() {
    return this.items[0]
  }
}

module.exports = Queue
