const { writeFile, readFile } = require("fs");

console.log("at start");
writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("at poit 1");
  if (err) {
    console.log("This error happened: ", err);
    return;
  } else {
    //here you write your next line
    writeFile(
      "./temporary/fileB.txt",
      "This is line 2\n",
      {
        encoding: "utf8",
        flag: "a",
      },
      (err, result) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened", err);
          return;
        } else {
          //here you write your next line
          writeFile(
            "./temporary/fileB.txt",
            "This is line 3\n",
            {
              encoding: "utf8",
              flag: "a",
            },
            (err, result) => {
              console.log("at point 3");
              if (err) {
                console.log(err);
                return;
              }
              console.log(result);
            }
          );
        }
      }
    );
  }
});
console.log("at end");
