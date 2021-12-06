const { move2, rawData, processRawData } = require("./common");
var processed = processRawData(rawData);

let position = {Horizontal: 0, Vertical: 0, Aim: 0};

for (let i = 0; i < processed.length; i++) {
    const {command, distance} = processed[i];

    move2[command](position, distance);
    
}

console.log("end", position)
console.log("h x v", position.Vertical * position.Horizontal);