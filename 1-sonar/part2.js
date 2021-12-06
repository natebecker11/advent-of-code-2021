const { data, countIncreases } = require("./common");

const windows = [];
for (let i = 0; i < data.length - 2; i++)
{
    const element = data[i];
    const nextOne = data[i + 1];
    const nextTwo = data[i + 2];

    windows.push(element + nextOne + nextTwo);
}

console.log("Number Of Increases In 3-Day Window", countIncreases(windows));

