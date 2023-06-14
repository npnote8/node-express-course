const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/result-2week-2.txt", `This is amazing`)
  .then(() => {
    return writeFile("./temporary/result-2week-2.txt", `\nThis is so amazing`, {
      flag: "a",
    });
  })
  .then(() => {
    return writeFile(
      "./temporary/result-2week-2.txt",
      `\nThis is extremely amazing`,
      { flag: "a" }
    );
  })
  .then(() => {
    return readFile("./temporary/result-2week-2.txt", "utf8");
  })
  .then((result) => console.log(result))
  .catch((error) => {
    console.log("An error occurred", error);
  });
