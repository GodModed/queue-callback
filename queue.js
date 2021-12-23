function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * The queue system
 * @class Queue
 * @name Queue
 */

class Queue {
  constructor() {
    /**
    * The items in the queue.
    * @type {array}
    */
    this.items = []
    /**
    * Amount of iterations that have passed in the queue.
    * @type {number}
    */
    this.iterations = 0
    /**
    * Has the queue started or not.
    * @type {boolean}
    */
    this.started = false
  }
  /**
  * Adds an item to the queue
  * @method Queue.additem
  * @param {(number|string)} item - the item to be added to the queue.
  * @example
  * <queue>.additem("hi"); // adds the value "hi" to the queue.
  */
  async additem(item) {
    if (typeof item == 'undefined') throw new Error('There is nothing to add to the queue.')
    return this.items.push(item)
  }
  /**
  * Removes the item first in line in the queue.
  * @method Queue.shift
  * @example
  * <queue>.shift(); // if the queue is ["hi", "bye"], the queue will be ["bye"]
  */
  async shift() {
    return this.items.shift()
  }
  /**
  * Starts executing the callback with the item in the queue.
  * @method Queue.start
  * @param {number} delay - the amount of time the function waits for each item in the queue.
  * @param {requestCallback} callback - calls the callback on each item in the queue.
  * @example
  * <queue>.start(500, callback); // Starts executing the callback every 500 ms
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
  * @method Queue.tick
  * @param {requestCallback} callback - calls the callback item for the item in the queue.
  * @example
  * <queue>.tick(callback); // goes through one iteration of the queue and then calls the callback function
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
  * @method Queue.clear
  * @example
  * <queue>.clear(); // clears the items in the queue and the iterations
  */
  async clear() {
    this.items = []
    this.iterations = 0;
  }
  /**
  * Stops the currently running queue.
  * @method Queue.stop
  * @example
  * <queue>.stop(); // stops the currently running started queue
  */
  async stop() {
    return this.started = false
  }
  /**
  * Outputs the first item in the queue.
  * @method Queue.first
  * @returns {any} Returns the first value in the queue.
  * @example
  * <queue>.first(); // outputs queue.items[0]
  * @readonly
  */
  async first() {
    return this.items[0]
  }
}

module.exports = Queue
