const EventEmitter = require("events");
const emitter = new EventEmitter();

function boo() {
  return new Promise((resolve) => {
    let message;
    emitter.on("eventOne", (msg) => {
      message = msg;
      console.log(`eventOne message: ${msg}`);
    });
    emitter.on("eventTwo", (msg) => {
      message = msg;
      console.log(`eventTwo message: ${msg}`);
    });
    resolve(message);
  });
}

process.nextTick(() => {
  emitter.emit("eventOne", "Hello world");
  emitter.emit("eventTwo", "Hello people");
});

boo().then(() => console.log("boo done"));
