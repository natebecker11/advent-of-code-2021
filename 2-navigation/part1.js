const { move, rawData, processRawData } = require("./common");

var processed = processRawData(rawData);

let position = {Horizontal: 0, Vertical: 0};

for (let i = 0; i < processed.length; i++) {
    const {command, distance} = processed[i];

    move[command](position, distance);
    
}

console.log("end", position)
console.log("h x v", position.Vertical * position.Horizontal);

