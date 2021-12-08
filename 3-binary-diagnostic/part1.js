const { data, miniData, findBit } = require("./common");



var gammaRate = "";

for (let i = 0; i < 12; i++)
{
    gammaRate = gammaRate + findBit(data, i, 1)  
}

console.log("gammaRate", gammaRate);
var decimalGamma = Number(parseInt(gammaRate, 2))
console.log('decimal gammaRate: ', decimalGamma)


var epsilonRate = "";

for (let i = 0; i < 12; i++)
{
    epsilonRate = epsilonRate + findBit(data, i, -1)   
}

console.log("epsilonRate", epsilonRate);
var decimalEpsilon = Number(parseInt(epsilonRate, 2))
console.log('decimal epsilonRate: ', decimalEpsilon)

console.log("answer: ", decimalGamma * decimalEpsilon)

