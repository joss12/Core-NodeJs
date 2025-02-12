const eventEmitter = require("events");

class Emitter extends eventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("foo");
});

myE.emit("foo");
