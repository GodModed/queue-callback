# queue-callback
Queue-callback helps with orginizing events that are too fast to handle or will ratelimit an api.
---

### Installation
```sh-session
npm install queue-callback
yarn add queue-callback
pnpm add queue-callback
```
---
```js
// Startup ---

const Queue = require('queue-callback');

const queue = new Queue();

//Usage ---

queue.additem("Value"); // Adds "Value" to the queue.

queue.shift(); // Removes the first item of the queue.

queue.clear(); // Clears the queue.

queue.first(); // Returns the first item of the queue.

queue.start(500, callback); //Starts executing the queue and finishing the tasks in line. 500 is the delay in ms for each item. Callback is the callback function which is called on every item.

var loop = setInterval(queuetick, 500); // 500 is the delay in ms for each item.

function queuetick() {
  queue.tick(callback); // Callback is the callback function which is called on every item. Queue.tick() is the same thing as start but it is manual.
}

queue.stop(); // Stops all currently running tasks in the queue.

function callback(item) {
  console.log(item); // Item will be recieved for every item in the queue.
}

// Varibles ---

console.log(queue.items); // Will output every item that is in the queue.

console.log(quuee.iterations); // Will output how many iterations of the queue have gone by.

console.log(quuee.started); // Will output true or false whether the queue is started or not.
```
