const { readFileSync, writeFileSync } = require("fs");

for (let i = 1; i <= 3; i++) {
  writeFileSync("./temporary/fileA.txt", `Line ${i} \n`, {
    encoding: "utf8",
    flag: "a+",
    mode: 0o666,
  });
}
const contentsFileA = readFileSync("./temporary/fileA.txt", "utf8");
console.log(contentsFileA);
