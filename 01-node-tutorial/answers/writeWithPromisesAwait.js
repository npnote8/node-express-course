const { writeFile, readFile } = require("fs").promises;

/* const writer = async () => {
  try {
    await writeFile("./temporary/result-2week-1.txt", `This is awesome`);
    await writeFile("./temporary/result-2week-1.txt", `\nThis is so awesome`, {
      flag: "a",
    });
    await writeFile(
      "./temporary/result-2week-1.txt",
      `\nThis is extremely awesome`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
}; */

const writer = async () => {
  try {
    await writeFile(
      "./temporary/result-2week-1.txt",
      "This is awesome\nThis is so awesome\nThis is extremely awesome"
    );
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const contentsFile = await readFile(
      "./temporary/result-2week-1.txt",
      "utf8"
    );
    console.log(contentsFile);
  } catch (error) {
    console.log(error);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (error) {
    console.log(error);
  }
};
readWrite();
