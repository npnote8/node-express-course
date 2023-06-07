const { john, peter } = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
console.log(data);
require("./mind-grenade");
sayHi("Susan");
sayHi(john);
sayHi(peter);
