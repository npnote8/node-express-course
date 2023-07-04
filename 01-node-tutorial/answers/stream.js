const { createReadStream } = require("fs");
const path = require("node:path");

const fileLocation = path.join(__dirname, "..", "content", "big.txt");

const stream = createReadStream(fileLocation, {
  highWaterMark: 20000,
  encoding: "utf8",
});

let counter = 0;

stream.on("data", (result) => {
  counter++;
  console.log(result);
});

stream.on("end", () => {
  console.log(`Number of chunks received ${counter}`);
});

stream.on("error", (err) => console.log(err));
